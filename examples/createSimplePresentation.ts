import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {inspect} from 'util';
import * as isomorphicPath from 'isomorphic-path';
import * as fs from 'fs';
import {isNil} from 'lodash';

import {
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
  fsGetAssetItemFromFile,
  ZoneType,
} from '../main';

// Substitute valid file paths for tests
const imagePath1 = isomorphicPath.resolve('../bs-test-media/images/Amazon Moon.jpg');
const videoPath1 = isomorphicPath.resolve('../bs-test-media/video/Hapuna Sunset.mp4');

const imageAsset1 = fsGetAssetItemFromFile(imagePath1);
const videoAsset1 = fsGetAssetItemFromFile(videoPath1);

function createInteractivePresentation() {
  const store = createStore(bsDmReducer, applyMiddleware(thunk));
  store.dispatch(dmNewSign('InteractiveTest'));

  // Video/Images zone
  const action = store.dispatch(dmAddZone('Zone1', ZoneType.VideoOrImages, 'vi1', {nonInteractive: false}));
  const videoZoneContainer = dmGetZoneMediaStateContainer(action.payload.id);

  try {
    let videoStateId;
    if (!isNil(videoAsset1)) {
      const addAction = store.dispatch(dmAddMediaState('Video1', videoZoneContainer, videoAsset1));
      videoStateId = addAction.payload.id;
    } else {
      throw new Error('Invalid path to video file.');
    }
    let imageStateId;
    if (!isNil(imageAsset1)) {
      const addAction = store.dispatch(dmAddMediaState('Image1', videoZoneContainer, imageAsset1));
      imageStateId = addAction.payload.id;
    } else {
      throw new Error('Invalid path to image file.');
    }

    // Add event/transition from video state to image
    store.dispatch(dmInteractiveAddTransitionForEventType(null, videoStateId, imageStateId, EventType.MediaEnd));

    // Create an event on the image state that returns to the prior state - this will use default timeout value
    const timerEventSpec1 = dmCreateDefaultEventSpecificationForEventType(
      EventType.Timer, {interval: 10}, {action: EventIntrinsicAction.ReturnToPriorState});
    store.dispatch(dmInteractiveAddTransitionForEventSpecification(null, imageStateId, null, timerEventSpec1));

    // Create a UDP event on the video state
    const udpEventSpec1 = dmCreateDefaultEventSpecificationForEventType(EventType.Udp, {data: 'abcd', label: 'Action'});
    // Set event with no target - this is equivalent to 'Remain on current state'
    const eventAction =
      store.dispatch(dmInteractiveAddTransitionForEventSpecification(null, videoStateId, null, udpEventSpec1));
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
