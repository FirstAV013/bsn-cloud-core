## BSN.cloud Core Library

BSN.cloud Core Library is a set of Javascript modules that can be used to create, deploy and manage BrightSign presentations and players on BSN.cloud. APIs are provided with Typescript declaration files to support Typescript development.

The library can be used by both desktop or server applications running on node.js, or by browser based applications.

The library includes a number of Typescript examples, in the examples directory, showing how several basic workflows can be implemented using the library. All examples are intended to be run using node.js in a desktop console.

### Setup and Run Examples

To setup the library to run the examples and experiment with other operations:
1. Install node.js on your machine. Node.js version 10 or greater is recommended.
2. Clone the bsn-cloud-core repository to a working directory.
3. Install dependencies
    > npm install

### Example: Simple presentation creation

The example *Create Simple Presentation* will create a simple, **non-interactive** BrightSign presentation for a BrightSign XT1144, which will display two images in a continuous loop. The JSON representation of the created presentation is displayed, and a bpfx file is written to the examples/output directory containing the presentation.

To run this example, open a terminal window, and navigate to the project directory. (The current directory in the console should be the working project directory for the bsn-cloud-package.)
- Enter the following command:
    > node examples/createSimplePresentation.js

The JSON representation of the presentation, which is the presentation data model state (DmState,) is displayed in the terminal window. The file written to examples/output is a simple bpfx file named simplePresentationExample.bpfx. This file can be opened in the BA Connected application.

(Note: the Interactive Presentation example also writes a bpfx file, but interactive presentations created this way cannot be currently opened in BA Connected.)

### BSN Activation

In order to use any of the BSN APIs that are accessed by the bsnConnector Javascript APIs in the library, a client program must activate a BSN network with valid BSN credentials. To activate a BSN network, three credentials are required:
1. User name (this is always an email address)
2. Password
3. Network name (i.e., name of the BSN network)

To provide these credentials for the examples included in this library, you must create a 'credentials.json' file in the 'examples' folder. A sample credentials file is provided named 'credentials-sample.json'. You can duplicate this file to a second file named 'credentials.json' and change the values of the three properties to reflect your valid credentials. These credentials will be used to activate a BSN session on the given network, and all BSN operations carried out by the example will be done on that network.

The included examples that work with BSN required a BSN network with a Content Cloud subscription.

### Example: BSN Presentation creation and upload

The example *Create and Upload Image Presentation* will create a similar non-interactive playlist as the simple presentation example, and will then upload the image files and the presentation to a BSN network. During upload, brief upload progress messages are displayed in the console window. When the upload is complete, the presentation JSON state for the BSN based presentation is displayed, followed by the JSON representation of the presentation entity on BSN.

Note that, after upload, the presentation references the BSN located assets.

The presentation is deleted at the end of the example, so that the example can be run multiple times without a name conflict. The image file assets are not deleted.

- To run this example, enter the command:
    > node examples/createAndUploadImagePresentation.js

### Typescript

All examples are provided as Typescript files. The transpiled Javascript files are also included so that the examples can be run without first transpiling them.

### Requirements
- Node.js version 10 or greater
- Typescript version 3.8 or 3.9 (if you want to use Typescript for development.)

### IDE Support
- Run/debug configurations for the examples are provided for both **Visual Studio Code** and **WebStorm**.
