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

The example *Create Simple Presentation* will create a simple, **non-interactive** BrightSign presentation for a BrightSign XT1144, which will display two images in a continuous loop. The JSON representation of the created presentation is displayed in the console, and a bpfx file is written to the examples/output directory containing the presentation.

To run this example, open a terminal window, and navigate to the project directory. (The current directory in the console should be the working project directory for the bsn-cloud-package.)
- Enter the following command:
    > node examples/createSimplePresentation.js

The JSON representation of the presentation, which is the presentation data model state (DmState,) is written to the terminal window. The file written to examples/output is a simple bpfx file named simplePresentationExample.bpfx.

The example *Create and Upload Image Presentation* will create a similar non-interactive playlist, and will then upload the image files and the presentation to a BSN network. During upload, brief upload progress messages are displayed in the console window. When the upload is complete, the presentation JSON state for the BSN based presentation is displayed, followed by the JSON representation of the presentation entity on BSN.

- To run this example, enter the command:
    > node examples/createAndUploadImagePresentation.js

All examples are provided as Typescript files. The transpiled Javascript files are also included so that the examples can be run without first transpiling them.

### Requirements
- Node.js version 10 or greater
- Typescript version 3.8 or 3.9 (if you want to use Typescript for development.)

### IDE Support
- Run/debug configurations for the examples are provided for both **Visual Studio Code** and **WebStorm**.
