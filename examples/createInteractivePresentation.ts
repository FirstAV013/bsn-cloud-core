import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {inspect} from 'util';
import * as isomorphicPath from 'isomorphic-path';
import * as fs from 'fs';
import {isNil} from 'lodash';

import {
  bscCreateAbsoluteRect,
  bsDmReducer,
  CommandSequenceType,
  CommandType,
  dmAddCommand,
  dmAddMediaState,
  dmAddZone,
  dmCreateCommand,
  dmCreateDefaultEventSpecificationForEventType,
  dmGetSignState,
  dmGetZoneMediaStateContainer,
  dmInteractiveAddTransitionForEventSpecification,
  dmInteractiveAddTransitionForEventType,
  dmNewSign,
  EventIntrinsicAction,
  EventType,
  fsGetAssetItemFromFile, PlayerModel, VideoMode,
  ZoneType,
} from '../main';

// Substitute other file paths for tests if desired
const imagePath1 = isomorphicPath.resolve('./examples/testMedia/images/Amazon Moon.jpg');
const imagePath2 = isomorphicPath.resolve('./examples/testMedia/images/Ecuador Flower.jpg');

const imageAsset1 = fsGetAssetItemFromFile(imagePath1);
const imageAsset2 = fsGetAssetItemFromFile(imagePath2);

function createInteractivePresentation() {
  const store = createStore(bsDmReducer, applyMiddleware(thunk));
  const videoMode = VideoMode.v1920x1080x60p;
  const player = PlayerModel.XT1144;
  store.dispatch(dmNewSign('interactivePresentationExample', videoMode, player));

  // Video/Images zone
  const position = bscCreateAbsoluteRect(0, 0, 1920, 1080);
  const action = store.dispatch(dmAddZone('Zone1', ZoneType.VideoOrImages, 'vi1', {position, nonInteractive: false}));
  const videoZoneContainer = dmGetZoneMediaStateContainer(action.payload.id);

  try {
    let image1StateId;
    if (!isNil(imageAsset1)) {
      const addAction = store.dispatch(dmAddMediaState('Image1', videoZoneContainer, imageAsset1));
      image1StateId = addAction.payload.id;
    } else {
      throw new Error('Invalid path to image1 file.');
    }
    let image2StateId;
    if (!isNil(imageAsset2)) {
      const addAction = store.dispatch(dmAddMediaState('Video1', videoZoneContainer, imageAsset2));
      image2StateId = addAction.payload.id;
    } else {
      throw new Error('Invalid path to image2 file.');
    }

    // Add 10 second timer event/transition from image1 state to image2
    store.dispatch(dmInteractiveAddTransitionForEventType(null, image1StateId, image2StateId, EventType.Timer, {interval: 10}));

    // Create an event on the image state that returns to the prior state - this will use default timeout value
    const timerEventSpec2 = dmCreateDefaultEventSpecificationForEventType(
      EventType.Timer, {interval: 15}, {action: EventIntrinsicAction.ReturnToPriorState});
    store.dispatch(dmInteractiveAddTransitionForEventSpecification(null, image2StateId, null, timerEventSpec2));

    // Create a UDP event on the video state
    const udpEventSpec1 = dmCreateDefaultEventSpecificationForEventType(EventType.Udp, {data: 'abcd', label: 'Action'});
    // Set event with no target - this is equivalent to 'Remain on current state'
    const eventAction =
      store.dispatch(dmInteractiveAddTransitionForEventSpecification(null, image1StateId, null, udpEventSpec1));
    const udpEventId = eventAction.payload.eventId;

    // Create a command
    const command1 = dmCreateCommand('ZoneMessage1', CommandType.SendZoneMessage, {messageData: 'ZoneMessage1'});
    // Add command to the UDP event
    store.dispatch(dmAddCommand(CommandSequenceType.Event, udpEventId, command1));

    // Make sure we have an output subdirectory
    const dir = './examples/output';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const output = JSON.stringify({bsdm: dmGetSignState(store.getState())}, null, 2);
    // Write the file
    fs.writeFileSync('./examples/output/interactivePresentationExample.bpfx', output);
    console.log(inspect(store.getState(), {depth: null, colors: true}));
  } catch (error) {
    console.log(error.name + ': ' + error.message);
  }
}

createInteractivePresentation();
