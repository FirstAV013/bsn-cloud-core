"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var util_1 = require("util");
var isomorphicPath = require("isomorphic-path");
var fs = require("fs");
var lodash_1 = require("lodash");
var main_1 = require("../main");
var imagePath1 = isomorphicPath.resolve('../bs-test-media/images/Amazon Moon.jpg');
var videoPath1 = isomorphicPath.resolve('../bs-test-media/video/Hapuna Sunset.mp4');
var imageAsset1 = main_1.fsGetAssetItemFromFile(imagePath1);
var videoAsset1 = main_1.fsGetAssetItemFromFile(videoPath1);
function createInteractivePresentation() {
    var store = redux_1.createStore(main_1.bsDmReducer, redux_1.applyMiddleware(redux_thunk_1.default));
    store.dispatch(main_1.dmNewSign('InteractiveTest'));
    var action = store.dispatch(main_1.dmAddZone('Zone1', main_1.ZoneType.VideoOrImages, 'vi1', { nonInteractive: false }));
    var videoZoneContainer = main_1.dmGetZoneMediaStateContainer(action.payload.id);
    try {
        var videoStateId = void 0;
        if (!lodash_1.isNil(videoAsset1)) {
            var addAction = store.dispatch(main_1.dmAddMediaState('Video1', videoZoneContainer, videoAsset1));
            videoStateId = addAction.payload.id;
        }
        else {
            throw new Error('Invalid path to video file.');
        }
        var imageStateId = void 0;
        if (!lodash_1.isNil(imageAsset1)) {
            var addAction = store.dispatch(main_1.dmAddMediaState('Image1', videoZoneContainer, imageAsset1));
            imageStateId = addAction.payload.id;
        }
        else {
            throw new Error('Invalid path to image file.');
        }
        store.dispatch(main_1.dmInteractiveAddTransitionForEventType(null, videoStateId, imageStateId, main_1.EventType.MediaEnd));
        var timerEventSpec1 = main_1.dmCreateDefaultEventSpecificationForEventType(main_1.EventType.Timer, { interval: 10 }, { action: main_1.EventIntrinsicAction.ReturnToPriorState });
        store.dispatch(main_1.dmInteractiveAddTransitionForEventSpecification(null, imageStateId, null, timerEventSpec1));
        var udpEventSpec1 = main_1.dmCreateDefaultEventSpecificationForEventType(main_1.EventType.Udp, { data: 'abcd', label: 'Action' });
        var eventAction = store.dispatch(main_1.dmInteractiveAddTransitionForEventSpecification(null, videoStateId, null, udpEventSpec1));
        var udpEventId = eventAction.payload.eventId;
        var command1 = main_1.dmCreateCommand('ZoneMessage1', main_1.CommandType.SendZoneMessage, { messageData: 'ZoneMessage1' });
        store.dispatch(main_1.dmAddCommand(main_1.CommandSequenceType.Event, udpEventId, command1));
        var dir = './examples/output';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        var output = JSON.stringify({ bsdm: main_1.dmGetSignState(store.getState()) }, null, 2);
        fs.writeFileSync('./examples/output/interactivePresentationExample.bpfx', output);
        console.log(util_1.inspect(store.getState(), { depth: null, colors: true }));
    }
    catch (error) {
        console.log(error.name + ': ' + error.message);
    }
}
createInteractivePresentation();
//# sourceMappingURL=createSimplePresentation.js.map