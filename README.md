# node-red-contrib-echarts

A [Node-RED](https://nodered.org/) node that creates SVG charts, using the [Apache ECharts](https://echarts.apache.org/) library.

## Install

Either use the `Node-RED Menu - Manage Palette - Install`, or run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-echarts

## Usage

You pass the chart configuration in the `msg.payload`.

Please refer to the ECharts documentation.

## Example

~~~
msg.payload = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  legend: {
    data: ['sales']
  },
  xAxis: {
    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
~~~

