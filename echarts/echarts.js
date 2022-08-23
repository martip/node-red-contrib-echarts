const echarts = require('echarts');

module.exports = function(RED) {

  function EChartsNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    this.width = config.width && !isNaN(config.width) ? parseInt(config.width) : 1024;
    this.height = config.height && !isNaN(config.height) ? parseInt(config.height) : 768;
  
    this.on('input', async (msg, send, done) => {

      if (msg.hasOwnProperty('payload')) {

        try {

          const chart = echarts.init(null, null, {
            renderer: 'svg', // must use SVG mode
            ssr: true, // enable SSR
            width: this.width, // need to specify height and width
            height: this.height
          });
          
          chart.setOption(msg.payload);
          const svgString = chart.renderToSVGString();
          msg.payload = svgString;
          send(msg);
          chart.dispose();
          done();
  
        } catch (error) {
          done(error);
        }


      } else {
        // If no payload just pass it on.
        send(msg);
        done();
      }

      
      // Out

      // Once finished, call 'done'.
      // This call is wrapped in a check that 'done' exists
      // so the node will work in earlier versions of Node-RED (<1.0)
      if (done) {
        done();
      }
    });
  };

  RED.nodes.registerType('echarts', EChartsNode);

};