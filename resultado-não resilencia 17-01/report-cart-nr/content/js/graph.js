/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1709.0, "minX": 0.0, "maxY": 10306.0, "series": [{"data": [[0.0, 1709.0], [0.1, 2373.0], [0.2, 2598.0], [0.3, 3000.0], [0.4, 3000.0], [0.5, 3000.0], [0.6, 3000.0], [0.7, 3000.0], [0.8, 3000.0], [0.9, 3000.0], [1.0, 3000.0], [1.1, 3000.0], [1.2, 3000.0], [1.3, 3000.0], [1.4, 3000.0], [1.5, 3000.0], [1.6, 3000.0], [1.7, 3000.0], [1.8, 3000.0], [1.9, 3000.0], [2.0, 3000.0], [2.1, 3000.0], [2.2, 3000.0], [2.3, 3000.0], [2.4, 3000.0], [2.5, 3000.0], [2.6, 3001.0], [2.7, 3001.0], [2.8, 3001.0], [2.9, 3001.0], [3.0, 3001.0], [3.1, 3001.0], [3.2, 3001.0], [3.3, 3001.0], [3.4, 3001.0], [3.5, 3001.0], [3.6, 3001.0], [3.7, 3001.0], [3.8, 3001.0], [3.9, 3001.0], [4.0, 3001.0], [4.1, 3001.0], [4.2, 3001.0], [4.3, 3001.0], [4.4, 3001.0], [4.5, 3001.0], [4.6, 3001.0], [4.7, 3001.0], [4.8, 3001.0], [4.9, 3001.0], [5.0, 3001.0], [5.1, 3001.0], [5.2, 3001.0], [5.3, 3001.0], [5.4, 3001.0], [5.5, 3001.0], [5.6, 3001.0], [5.7, 3001.0], [5.8, 3001.0], [5.9, 3001.0], [6.0, 3001.0], [6.1, 3001.0], [6.2, 3001.0], [6.3, 3001.0], [6.4, 3001.0], [6.5, 3001.0], [6.6, 3001.0], [6.7, 3001.0], [6.8, 3001.0], [6.9, 3001.0], [7.0, 3001.0], [7.1, 3001.0], [7.2, 3001.0], [7.3, 3001.0], [7.4, 3001.0], [7.5, 3001.0], [7.6, 3001.0], [7.7, 3001.0], [7.8, 3001.0], [7.9, 3001.0], [8.0, 3001.0], [8.1, 3001.0], [8.2, 3001.0], [8.3, 3001.0], [8.4, 3001.0], [8.5, 3001.0], [8.6, 3001.0], [8.7, 3001.0], [8.8, 3001.0], [8.9, 3001.0], [9.0, 3001.0], [9.1, 3001.0], [9.2, 3001.0], [9.3, 3001.0], [9.4, 3001.0], [9.5, 3001.0], [9.6, 3001.0], [9.7, 3001.0], [9.8, 3001.0], [9.9, 3001.0], [10.0, 3001.0], [10.1, 3001.0], [10.2, 3001.0], [10.3, 3001.0], [10.4, 3001.0], [10.5, 3001.0], [10.6, 3001.0], [10.7, 3001.0], [10.8, 3001.0], [10.9, 3001.0], [11.0, 3001.0], [11.1, 3001.0], [11.2, 3001.0], [11.3, 3001.0], [11.4, 3001.0], [11.5, 3001.0], [11.6, 3001.0], [11.7, 3001.0], [11.8, 3001.0], [11.9, 3001.0], [12.0, 3001.0], [12.1, 3001.0], [12.2, 3001.0], [12.3, 3001.0], [12.4, 3001.0], [12.5, 3001.0], [12.6, 3001.0], [12.7, 3001.0], [12.8, 3001.0], [12.9, 3001.0], [13.0, 3001.0], [13.1, 3001.0], [13.2, 3001.0], [13.3, 3001.0], [13.4, 3001.0], [13.5, 3001.0], [13.6, 3002.0], [13.7, 3002.0], [13.8, 3002.0], [13.9, 3002.0], [14.0, 3002.0], [14.1, 3002.0], [14.2, 3002.0], [14.3, 3002.0], [14.4, 3002.0], [14.5, 3002.0], [14.6, 3002.0], [14.7, 3002.0], [14.8, 3002.0], [14.9, 3002.0], [15.0, 3002.0], [15.1, 3002.0], [15.2, 3002.0], [15.3, 3002.0], [15.4, 3002.0], [15.5, 3002.0], [15.6, 3002.0], [15.7, 3002.0], [15.8, 3002.0], [15.9, 3002.0], [16.0, 3002.0], [16.1, 3002.0], [16.2, 3002.0], [16.3, 3002.0], [16.4, 3002.0], [16.5, 3002.0], [16.6, 3002.0], [16.7, 3002.0], [16.8, 3002.0], [16.9, 3002.0], [17.0, 3002.0], [17.1, 3002.0], [17.2, 3002.0], [17.3, 3002.0], [17.4, 3002.0], [17.5, 3002.0], [17.6, 3002.0], [17.7, 3002.0], [17.8, 3002.0], [17.9, 3002.0], [18.0, 3002.0], [18.1, 3002.0], [18.2, 3002.0], [18.3, 3002.0], [18.4, 3002.0], [18.5, 3002.0], [18.6, 3002.0], [18.7, 3002.0], [18.8, 3002.0], [18.9, 3002.0], [19.0, 3002.0], [19.1, 3002.0], [19.2, 3002.0], [19.3, 3002.0], [19.4, 3002.0], [19.5, 3002.0], [19.6, 3002.0], [19.7, 3002.0], [19.8, 3002.0], [19.9, 3002.0], [20.0, 3002.0], [20.1, 3002.0], [20.2, 3002.0], [20.3, 3002.0], [20.4, 3002.0], [20.5, 3002.0], [20.6, 3002.0], [20.7, 3002.0], [20.8, 3002.0], [20.9, 3002.0], [21.0, 3002.0], [21.1, 3002.0], [21.2, 3002.0], [21.3, 3002.0], [21.4, 3002.0], [21.5, 3002.0], [21.6, 3002.0], [21.7, 3002.0], [21.8, 3002.0], [21.9, 3002.0], [22.0, 3002.0], [22.1, 3002.0], [22.2, 3002.0], [22.3, 3002.0], [22.4, 3002.0], [22.5, 3002.0], [22.6, 3002.0], [22.7, 3002.0], [22.8, 3002.0], [22.9, 3002.0], [23.0, 3002.0], [23.1, 3002.0], [23.2, 3002.0], [23.3, 3002.0], [23.4, 3002.0], [23.5, 3002.0], [23.6, 3002.0], [23.7, 3002.0], [23.8, 3002.0], [23.9, 3002.0], [24.0, 3002.0], [24.1, 3002.0], [24.2, 3002.0], [24.3, 3002.0], [24.4, 3002.0], [24.5, 3002.0], [24.6, 3002.0], [24.7, 3002.0], [24.8, 3002.0], [24.9, 3002.0], [25.0, 3002.0], [25.1, 3002.0], [25.2, 3002.0], [25.3, 3002.0], [25.4, 3002.0], [25.5, 3002.0], [25.6, 3002.0], [25.7, 3002.0], [25.8, 3002.0], [25.9, 3002.0], [26.0, 3002.0], [26.1, 3002.0], [26.2, 3002.0], [26.3, 3002.0], [26.4, 3002.0], [26.5, 3002.0], [26.6, 3002.0], [26.7, 3002.0], [26.8, 3002.0], [26.9, 3002.0], [27.0, 3002.0], [27.1, 3002.0], [27.2, 3002.0], [27.3, 3002.0], [27.4, 3002.0], [27.5, 3002.0], [27.6, 3002.0], [27.7, 3002.0], [27.8, 3002.0], [27.9, 3002.0], [28.0, 3002.0], [28.1, 3002.0], [28.2, 3002.0], [28.3, 3002.0], [28.4, 3002.0], [28.5, 3003.0], [28.6, 3003.0], [28.7, 3003.0], [28.8, 3003.0], [28.9, 3003.0], [29.0, 3003.0], [29.1, 3003.0], [29.2, 3003.0], [29.3, 3003.0], [29.4, 3003.0], [29.5, 3003.0], [29.6, 3003.0], [29.7, 3003.0], [29.8, 3003.0], [29.9, 3003.0], [30.0, 3003.0], [30.1, 3003.0], [30.2, 3003.0], [30.3, 3003.0], [30.4, 3003.0], [30.5, 3003.0], [30.6, 3003.0], [30.7, 3003.0], [30.8, 3003.0], [30.9, 3003.0], [31.0, 3003.0], [31.1, 3003.0], [31.2, 3003.0], [31.3, 3003.0], [31.4, 3003.0], [31.5, 3003.0], [31.6, 3003.0], [31.7, 3003.0], [31.8, 3003.0], [31.9, 3003.0], [32.0, 3003.0], [32.1, 3003.0], [32.2, 3003.0], [32.3, 3003.0], [32.4, 3003.0], [32.5, 3003.0], [32.6, 3003.0], [32.7, 3003.0], [32.8, 3003.0], [32.9, 3003.0], [33.0, 3003.0], [33.1, 3003.0], [33.2, 3003.0], [33.3, 3003.0], [33.4, 3003.0], [33.5, 3003.0], [33.6, 3003.0], [33.7, 3003.0], [33.8, 3003.0], [33.9, 3003.0], [34.0, 3003.0], [34.1, 3003.0], [34.2, 3003.0], [34.3, 3003.0], [34.4, 3003.0], [34.5, 3003.0], [34.6, 3003.0], [34.7, 3003.0], [34.8, 3003.0], [34.9, 3003.0], [35.0, 3003.0], [35.1, 3003.0], [35.2, 3003.0], [35.3, 3003.0], [35.4, 3003.0], [35.5, 3003.0], [35.6, 3003.0], [35.7, 3003.0], [35.8, 3003.0], [35.9, 3003.0], [36.0, 3003.0], [36.1, 3003.0], [36.2, 3003.0], [36.3, 3003.0], [36.4, 3003.0], [36.5, 3003.0], [36.6, 3003.0], [36.7, 3003.0], [36.8, 3003.0], [36.9, 3003.0], [37.0, 3003.0], [37.1, 3003.0], [37.2, 3003.0], [37.3, 3003.0], [37.4, 3003.0], [37.5, 3003.0], [37.6, 3003.0], [37.7, 3003.0], [37.8, 3003.0], [37.9, 3003.0], [38.0, 3003.0], [38.1, 3003.0], [38.2, 3003.0], [38.3, 3003.0], [38.4, 3003.0], [38.5, 3003.0], [38.6, 3003.0], [38.7, 3003.0], [38.8, 3003.0], [38.9, 3003.0], [39.0, 3003.0], [39.1, 3003.0], [39.2, 3003.0], [39.3, 3003.0], [39.4, 3003.0], [39.5, 3003.0], [39.6, 3003.0], [39.7, 3003.0], [39.8, 3003.0], [39.9, 3003.0], [40.0, 3003.0], [40.1, 3003.0], [40.2, 3003.0], [40.3, 3003.0], [40.4, 3003.0], [40.5, 3003.0], [40.6, 3003.0], [40.7, 3003.0], [40.8, 3003.0], [40.9, 3003.0], [41.0, 3003.0], [41.1, 3003.0], [41.2, 3003.0], [41.3, 3003.0], [41.4, 3003.0], [41.5, 3003.0], [41.6, 3003.0], [41.7, 3003.0], [41.8, 3003.0], [41.9, 3003.0], [42.0, 3003.0], [42.1, 3003.0], [42.2, 3003.0], [42.3, 3003.0], [42.4, 3003.0], [42.5, 3003.0], [42.6, 3003.0], [42.7, 3003.0], [42.8, 3003.0], [42.9, 3003.0], [43.0, 3003.0], [43.1, 3003.0], [43.2, 3003.0], [43.3, 3003.0], [43.4, 3003.0], [43.5, 3003.0], [43.6, 3003.0], [43.7, 3003.0], [43.8, 3003.0], [43.9, 3003.0], [44.0, 3003.0], [44.1, 3003.0], [44.2, 3003.0], [44.3, 3003.0], [44.4, 3003.0], [44.5, 3003.0], [44.6, 3003.0], [44.7, 3003.0], [44.8, 3003.0], [44.9, 3003.0], [45.0, 3003.0], [45.1, 3003.0], [45.2, 3003.0], [45.3, 3003.0], [45.4, 3003.0], [45.5, 3003.0], [45.6, 3003.0], [45.7, 3003.0], [45.8, 3003.0], [45.9, 3003.0], [46.0, 3003.0], [46.1, 3003.0], [46.2, 3003.0], [46.3, 3003.0], [46.4, 3003.0], [46.5, 3003.0], [46.6, 3003.0], [46.7, 3003.0], [46.8, 3003.0], [46.9, 3003.0], [47.0, 3003.0], [47.1, 3003.0], [47.2, 3003.0], [47.3, 3003.0], [47.4, 3003.0], [47.5, 3003.0], [47.6, 3003.0], [47.7, 3003.0], [47.8, 3003.0], [47.9, 3003.0], [48.0, 3003.0], [48.1, 3003.0], [48.2, 3003.0], [48.3, 3003.0], [48.4, 3003.0], [48.5, 3003.0], [48.6, 3003.0], [48.7, 3003.0], [48.8, 3003.0], [48.9, 3003.0], [49.0, 3003.0], [49.1, 3003.0], [49.2, 3003.0], [49.3, 3003.0], [49.4, 3003.0], [49.5, 3003.0], [49.6, 3003.0], [49.7, 3003.0], [49.8, 3003.0], [49.9, 3003.0], [50.0, 3003.0], [50.1, 3003.0], [50.2, 3003.0], [50.3, 3003.0], [50.4, 3003.0], [50.5, 3003.0], [50.6, 3003.0], [50.7, 3003.0], [50.8, 3003.0], [50.9, 3003.0], [51.0, 3003.0], [51.1, 3003.0], [51.2, 3003.0], [51.3, 3003.0], [51.4, 3003.0], [51.5, 3003.0], [51.6, 3003.0], [51.7, 3003.0], [51.8, 3003.0], [51.9, 3003.0], [52.0, 3003.0], [52.1, 3003.0], [52.2, 3003.0], [52.3, 3003.0], [52.4, 3003.0], [52.5, 3003.0], [52.6, 3003.0], [52.7, 3003.0], [52.8, 3003.0], [52.9, 3003.0], [53.0, 3003.0], [53.1, 3003.0], [53.2, 3003.0], [53.3, 3003.0], [53.4, 3003.0], [53.5, 3003.0], [53.6, 3003.0], [53.7, 3003.0], [53.8, 3003.0], [53.9, 3003.0], [54.0, 3003.0], [54.1, 3003.0], [54.2, 3003.0], [54.3, 3003.0], [54.4, 3003.0], [54.5, 3003.0], [54.6, 3003.0], [54.7, 3003.0], [54.8, 3003.0], [54.9, 3003.0], [55.0, 3003.0], [55.1, 3003.0], [55.2, 3003.0], [55.3, 3003.0], [55.4, 3003.0], [55.5, 3003.0], [55.6, 3003.0], [55.7, 3003.0], [55.8, 3003.0], [55.9, 3003.0], [56.0, 3003.0], [56.1, 3003.0], [56.2, 3003.0], [56.3, 3003.0], [56.4, 3003.0], [56.5, 3003.0], [56.6, 3003.0], [56.7, 3003.0], [56.8, 3003.0], [56.9, 3003.0], [57.0, 3003.0], [57.1, 3003.0], [57.2, 3003.0], [57.3, 3003.0], [57.4, 3003.0], [57.5, 3003.0], [57.6, 3003.0], [57.7, 3003.0], [57.8, 3003.0], [57.9, 3003.0], [58.0, 3003.0], [58.1, 3003.0], [58.2, 3003.0], [58.3, 3003.0], [58.4, 3003.0], [58.5, 3003.0], [58.6, 3003.0], [58.7, 3003.0], [58.8, 3003.0], [58.9, 3003.0], [59.0, 3003.0], [59.1, 3003.0], [59.2, 3003.0], [59.3, 3003.0], [59.4, 3003.0], [59.5, 3003.0], [59.6, 3003.0], [59.7, 3003.0], [59.8, 3003.0], [59.9, 3003.0], [60.0, 3003.0], [60.1, 3003.0], [60.2, 3003.0], [60.3, 3003.0], [60.4, 3003.0], [60.5, 3003.0], [60.6, 3003.0], [60.7, 3003.0], [60.8, 3003.0], [60.9, 3003.0], [61.0, 3003.0], [61.1, 3004.0], [61.2, 3004.0], [61.3, 3004.0], [61.4, 3004.0], [61.5, 3004.0], [61.6, 3004.0], [61.7, 3004.0], [61.8, 3004.0], [61.9, 3004.0], [62.0, 3004.0], [62.1, 3004.0], [62.2, 3004.0], [62.3, 3004.0], [62.4, 3004.0], [62.5, 3004.0], [62.6, 3004.0], [62.7, 3004.0], [62.8, 3004.0], [62.9, 3004.0], [63.0, 3004.0], [63.1, 3004.0], [63.2, 3004.0], [63.3, 3004.0], [63.4, 3004.0], [63.5, 3004.0], [63.6, 3004.0], [63.7, 3004.0], [63.8, 3004.0], [63.9, 3004.0], [64.0, 3004.0], [64.1, 3004.0], [64.2, 3004.0], [64.3, 3004.0], [64.4, 3004.0], [64.5, 3004.0], [64.6, 3004.0], [64.7, 3004.0], [64.8, 3004.0], [64.9, 3004.0], [65.0, 3004.0], [65.1, 3004.0], [65.2, 3004.0], [65.3, 3004.0], [65.4, 3004.0], [65.5, 3004.0], [65.6, 3004.0], [65.7, 3004.0], [65.8, 3004.0], [65.9, 3004.0], [66.0, 3004.0], [66.1, 3004.0], [66.2, 3004.0], [66.3, 3004.0], [66.4, 3004.0], [66.5, 3004.0], [66.6, 3004.0], [66.7, 3004.0], [66.8, 3004.0], [66.9, 3004.0], [67.0, 3004.0], [67.1, 3004.0], [67.2, 3004.0], [67.3, 3004.0], [67.4, 3004.0], [67.5, 3004.0], [67.6, 3004.0], [67.7, 3004.0], [67.8, 3004.0], [67.9, 3004.0], [68.0, 3004.0], [68.1, 3004.0], [68.2, 3004.0], [68.3, 3004.0], [68.4, 3004.0], [68.5, 3004.0], [68.6, 3004.0], [68.7, 3004.0], [68.8, 3004.0], [68.9, 3004.0], [69.0, 3004.0], [69.1, 3004.0], [69.2, 3004.0], [69.3, 3004.0], [69.4, 3004.0], [69.5, 3004.0], [69.6, 3004.0], [69.7, 3004.0], [69.8, 3004.0], [69.9, 3004.0], [70.0, 3004.0], [70.1, 3004.0], [70.2, 3004.0], [70.3, 3004.0], [70.4, 3004.0], [70.5, 3004.0], [70.6, 3004.0], [70.7, 3004.0], [70.8, 3004.0], [70.9, 3004.0], [71.0, 3004.0], [71.1, 3004.0], [71.2, 3004.0], [71.3, 3004.0], [71.4, 3004.0], [71.5, 3004.0], [71.6, 3004.0], [71.7, 3004.0], [71.8, 3004.0], [71.9, 3004.0], [72.0, 3004.0], [72.1, 3004.0], [72.2, 3004.0], [72.3, 3004.0], [72.4, 3004.0], [72.5, 3004.0], [72.6, 3004.0], [72.7, 3004.0], [72.8, 3004.0], [72.9, 3004.0], [73.0, 3004.0], [73.1, 3004.0], [73.2, 3004.0], [73.3, 3004.0], [73.4, 3004.0], [73.5, 3004.0], [73.6, 3004.0], [73.7, 3004.0], [73.8, 3004.0], [73.9, 3004.0], [74.0, 3004.0], [74.1, 3004.0], [74.2, 3004.0], [74.3, 3004.0], [74.4, 3004.0], [74.5, 3004.0], [74.6, 3004.0], [74.7, 3004.0], [74.8, 3004.0], [74.9, 3004.0], [75.0, 3004.0], [75.1, 3004.0], [75.2, 3004.0], [75.3, 3004.0], [75.4, 3004.0], [75.5, 3004.0], [75.6, 3004.0], [75.7, 3004.0], [75.8, 3004.0], [75.9, 3004.0], [76.0, 3004.0], [76.1, 3004.0], [76.2, 3004.0], [76.3, 3004.0], [76.4, 3004.0], [76.5, 3004.0], [76.6, 3004.0], [76.7, 3004.0], [76.8, 3004.0], [76.9, 3004.0], [77.0, 3004.0], [77.1, 3004.0], [77.2, 3004.0], [77.3, 3004.0], [77.4, 3004.0], [77.5, 3004.0], [77.6, 3004.0], [77.7, 3004.0], [77.8, 3004.0], [77.9, 3004.0], [78.0, 3004.0], [78.1, 3004.0], [78.2, 3004.0], [78.3, 3004.0], [78.4, 3004.0], [78.5, 3004.0], [78.6, 3004.0], [78.7, 3004.0], [78.8, 3004.0], [78.9, 3004.0], [79.0, 3004.0], [79.1, 3004.0], [79.2, 3004.0], [79.3, 3004.0], [79.4, 3004.0], [79.5, 3004.0], [79.6, 3004.0], [79.7, 3004.0], [79.8, 3004.0], [79.9, 3004.0], [80.0, 3004.0], [80.1, 3004.0], [80.2, 3004.0], [80.3, 3004.0], [80.4, 3004.0], [80.5, 3004.0], [80.6, 3004.0], [80.7, 3004.0], [80.8, 3005.0], [80.9, 3005.0], [81.0, 3005.0], [81.1, 3005.0], [81.2, 3005.0], [81.3, 3005.0], [81.4, 3005.0], [81.5, 3005.0], [81.6, 3005.0], [81.7, 3005.0], [81.8, 3005.0], [81.9, 3006.0], [82.0, 3006.0], [82.1, 3006.0], [82.2, 3006.0], [82.3, 3007.0], [82.4, 3007.0], [82.5, 3007.0], [82.6, 3007.0], [82.7, 3008.0], [82.8, 3008.0], [82.9, 3008.0], [83.0, 3009.0], [83.1, 3009.0], [83.2, 3009.0], [83.3, 3010.0], [83.4, 3012.0], [83.5, 3013.0], [83.6, 3015.0], [83.7, 3021.0], [83.8, 3031.0], [83.9, 3036.0], [84.0, 3066.0], [84.1, 4005.0], [84.2, 4006.0], [84.3, 4007.0], [84.4, 4007.0], [84.5, 4008.0], [84.6, 4008.0], [84.7, 4009.0], [84.8, 4010.0], [84.9, 4011.0], [85.0, 4011.0], [85.1, 4013.0], [85.2, 4015.0], [85.3, 4016.0], [85.4, 4016.0], [85.5, 4018.0], [85.6, 4019.0], [85.7, 4019.0], [85.8, 4019.0], [85.9, 4020.0], [86.0, 4020.0], [86.1, 4020.0], [86.2, 4021.0], [86.3, 4022.0], [86.4, 4022.0], [86.5, 4022.0], [86.6, 4022.0], [86.7, 4023.0], [86.8, 4023.0], [86.9, 4023.0], [87.0, 4023.0], [87.1, 4024.0], [87.2, 4024.0], [87.3, 4025.0], [87.4, 4025.0], [87.5, 4025.0], [87.6, 4026.0], [87.7, 4026.0], [87.8, 4026.0], [87.9, 4026.0], [88.0, 4027.0], [88.1, 4027.0], [88.2, 4027.0], [88.3, 4027.0], [88.4, 4027.0], [88.5, 4027.0], [88.6, 4027.0], [88.7, 4028.0], [88.8, 4028.0], [88.9, 4028.0], [89.0, 4029.0], [89.1, 4029.0], [89.2, 4029.0], [89.3, 4029.0], [89.4, 4030.0], [89.5, 4030.0], [89.6, 4030.0], [89.7, 4030.0], [89.8, 4031.0], [89.9, 4031.0], [90.0, 4031.0], [90.1, 4031.0], [90.2, 4031.0], [90.3, 4032.0], [90.4, 4032.0], [90.5, 4032.0], [90.6, 4032.0], [90.7, 4033.0], [90.8, 4033.0], [90.9, 4033.0], [91.0, 4033.0], [91.1, 4034.0], [91.2, 4034.0], [91.3, 4034.0], [91.4, 4035.0], [91.5, 4035.0], [91.6, 4036.0], [91.7, 4036.0], [91.8, 4036.0], [91.9, 4037.0], [92.0, 4038.0], [92.1, 4040.0], [92.2, 6018.0], [92.3, 6022.0], [92.4, 6023.0], [92.5, 6025.0], [92.6, 6026.0], [92.7, 6026.0], [92.8, 6028.0], [92.9, 6030.0], [93.0, 6032.0], [93.1, 6033.0], [93.2, 6034.0], [93.3, 6035.0], [93.4, 6037.0], [93.5, 6038.0], [93.6, 6039.0], [93.7, 6040.0], [93.8, 6041.0], [93.9, 6041.0], [94.0, 6042.0], [94.1, 6042.0], [94.2, 6042.0], [94.3, 6042.0], [94.4, 6042.0], [94.5, 6043.0], [94.6, 6043.0], [94.7, 6043.0], [94.8, 6043.0], [94.9, 6043.0], [95.0, 6043.0], [95.1, 6044.0], [95.2, 6044.0], [95.3, 6044.0], [95.4, 6044.0], [95.5, 6045.0], [95.6, 6045.0], [95.7, 6045.0], [95.8, 6046.0], [95.9, 6047.0], [96.0, 6047.0], [96.1, 6048.0], [96.2, 6050.0], [96.3, 6050.0], [96.4, 6051.0], [96.5, 6051.0], [96.6, 10057.0], [96.7, 10079.0], [96.8, 10093.0], [96.9, 10097.0], [97.0, 10119.0], [97.1, 10140.0], [97.2, 10152.0], [97.3, 10159.0], [97.4, 10170.0], [97.5, 10198.0], [97.6, 10200.0], [97.7, 10201.0], [97.8, 10204.0], [97.9, 10205.0], [98.0, 10206.0], [98.1, 10207.0], [98.2, 10209.0], [98.3, 10214.0], [98.4, 10226.0], [98.5, 10238.0], [98.6, 10244.0], [98.7, 10251.0], [98.8, 10263.0], [98.9, 10266.0], [99.0, 10267.0], [99.1, 10267.0], [99.2, 10268.0], [99.3, 10268.0], [99.4, 10268.0], [99.5, 10268.0], [99.6, 10297.0], [99.7, 10300.0], [99.8, 10300.0], [99.9, 10301.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1700.0, "maxY": 2708.0, "series": [{"data": [[2300.0, 3.0], [2400.0, 2.0], [10200.0, 68.0], [10100.0, 22.0], [10000.0, 10.0], [2500.0, 1.0], [10300.0, 10.0], [3000.0, 2708.0], [6000.0, 143.0], [1700.0, 1.0], [4000.0, 264.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 3225.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 3225.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 17.285714285714278, "minX": 1.64246238E12, "maxY": 250.0, "series": [{"data": [[1.64246256E12, 20.0], [1.64246244E12, 195.16032295271074], [1.64246262E12, 17.285714285714278], [1.6424625E12, 20.0], [1.64246238E12, 250.0]], "isOverall": false, "label": "ddos-servi\u00E7o-de-carrinho", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1709.0, "minX": 1.0, "maxY": 10284.0, "series": [{"data": [[2.0, 3004.0], [3.0, 3001.0], [4.0, 3003.0], [5.0, 3003.0], [6.0, 3002.0], [7.0, 3004.0], [8.0, 3003.0], [9.0, 1709.0], [10.0, 2484.0], [11.0, 2373.0], [12.0, 2372.0], [13.0, 2598.0], [14.0, 2472.0], [15.0, 2336.0], [16.0, 3003.0], [17.0, 3001.0], [18.0, 3001.0], [19.0, 3004.0], [20.0, 3002.631147540982], [22.0, 10210.0], [26.0, 10244.0], [27.0, 10262.0], [29.0, 10162.0], [30.0, 10266.0], [34.0, 10245.0], [37.0, 10212.0], [39.0, 10284.0], [40.0, 10253.333333333334], [42.0, 10247.0], [45.0, 10232.0], [44.0, 10159.0], [47.0, 10210.0], [46.0, 10214.0], [48.0, 10226.0], [50.0, 10133.0], [53.0, 10109.0], [52.0, 10141.0], [54.0, 10108.0], [57.0, 10093.0], [56.0, 10096.0], [58.0, 10094.0], [61.0, 10128.0], [60.0, 10072.5], [63.0, 10075.333333333334], [67.0, 10206.0], [66.0, 10210.0], [71.0, 10205.5], [69.0, 10207.0], [75.0, 10204.5], [73.0, 10205.666666666666], [79.0, 6043.666666666667], [77.0, 4561.933333333333], [76.0, 10193.714285714286], [82.0, 4526.5], [81.0, 6043.0], [80.0, 6047.0], [85.0, 6046.0], [91.0, 6051.0], [90.0, 6051.0], [89.0, 6040.5], [88.0, 6051.666666666667], [95.0, 3763.75], [94.0, 6050.0], [93.0, 6050.0], [99.0, 4035.0], [97.0, 4028.0], [96.0, 4031.0], [103.0, 4033.0], [102.0, 4033.0], [101.0, 4032.0], [100.0, 4034.0], [106.0, 4033.0], [110.0, 4031.0], [108.0, 4034.0], [115.0, 4038.0], [113.0, 4032.0], [112.0, 4032.6666666666665], [117.0, 4041.0], [123.0, 4032.0], [122.0, 4032.0], [121.0, 4036.0], [120.0, 4036.0], [127.0, 4027.0], [125.0, 4035.3333333333335], [135.0, 4033.75], [132.0, 4030.0], [130.0, 4038.0], [142.0, 4031.3333333333335], [141.0, 4033.0], [140.0, 4033.0], [138.0, 4030.0], [136.0, 4034.0], [151.0, 4030.0], [150.0, 4024.6666666666665], [148.0, 4036.0], [146.0, 4028.6666666666665], [144.0, 4036.0], [159.0, 4009.0], [158.0, 4012.0], [156.0, 4020.0], [155.0, 4013.0], [153.0, 4009.0], [152.0, 4018.0], [167.0, 4028.0], [166.0, 4017.0], [165.0, 4030.0], [164.0, 4008.0], [163.0, 4011.0], [160.0, 4035.0], [175.0, 3002.0], [174.0, 3012.0], [171.0, 3003.0], [170.0, 3505.5], [169.0, 4022.0], [168.0, 4023.0], [183.0, 3001.0], [182.0, 3001.0], [181.0, 3007.0], [179.0, 3001.6666666666665], [178.0, 3001.0], [176.0, 3012.0], [191.0, 3004.0], [190.0, 3004.0], [189.0, 3004.0], [188.0, 3004.0], [186.0, 3005.0], [185.0, 3001.0], [198.0, 3003.0], [197.0, 3002.0], [195.0, 3003.25], [207.0, 3003.5], [205.0, 3003.0], [204.0, 3003.0], [203.0, 3004.0], [202.0, 3002.0], [201.0, 3001.5], [215.0, 3004.0], [213.0, 3001.6666666666665], [211.0, 3003.25], [223.0, 3011.0], [220.0, 3008.0], [219.0, 3008.0], [216.0, 3002.0], [231.0, 3007.0], [230.0, 3007.0], [229.0, 3008.5], [239.0, 3001.0], [237.0, 3002.0], [235.0, 3006.5], [232.0, 3007.0], [247.0, 3003.0], [246.0, 3002.5], [245.0, 3002.0], [244.0, 3003.0], [243.0, 3004.0], [241.0, 3003.0], [240.0, 3002.875], [250.0, 3381.588045234251], [255.0, 3002.5], [254.0, 3005.6666666666665], [251.0, 3004.0], [249.0, 3002.0], [248.0, 3000.0], [263.0, 3934.166666666667], [264.0, 3456.8888888888887], [270.0, 3582.5925394548053], [269.0, 3003.0], [268.0, 3003.0], [265.0, 3004.3333333333335], [261.0, 3003.0], [262.0, 3004.0], [258.0, 3009.0], [1.0, 3001.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[173.90129950495054, 3464.8326113861344]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 270.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.64246238E12, "maxY": 93115.8, "series": [{"data": [[1.64246256E12, 19600.5], [1.64246244E12, 93115.8], [1.64246262E12, 3414.95], [1.6424625E12, 19332.0], [1.64246238E12, 37760.683333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64246256E12, 0.0], [1.64246244E12, 0.0], [1.64246262E12, 0.0], [1.6424625E12, 0.0], [1.64246238E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2935.8142857142857, "minX": 1.64246238E12, "maxY": 3864.6643598615897, "series": [{"data": [[1.64246256E12, 3002.5561643835617], [1.64246244E12, 3864.6643598615897], [1.64246262E12, 2935.8142857142857], [1.6424625E12, 3002.711111111109], [1.64246238E12, 3007.9587482219067]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.64246238E12, "maxY": 221.98571428571432, "series": [{"data": [[1.64246256E12, 0.0], [1.64246244E12, 0.0], [1.64246262E12, 221.98571428571432], [1.6424625E12, 0.0], [1.64246238E12, 0.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.64246238E12, "maxY": 4.9E-324, "series": [{"data": [[1.64246256E12, 0.0], [1.64246244E12, 0.0], [1.64246262E12, 0.0], [1.6424625E12, 0.0], [1.64246238E12, 0.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1709.0, "minX": 1.64246262E12, "maxY": 2598.0, "series": [{"data": [[1.64246262E12, 2598.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64246262E12, 1709.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64246262E12, 1709.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64246262E12, 1709.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64246262E12, 1709.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64246262E12, 2373.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2373.0, "minX": 1.0, "maxY": 10224.0, "series": [{"data": [[13.0, 2373.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 7045.5], [2.0, 3003.0], [36.0, 3003.5], [42.0, 3003.0], [3.0, 3004.0], [55.0, 3003.0], [4.0, 3003.0], [77.0, 3003.0], [5.0, 3003.0], [90.0, 3003.0], [96.0, 3003.0], [6.0, 3003.0], [103.0, 4033.0], [107.0, 3003.0], [110.0, 3003.0], [109.0, 3003.0], [7.0, 3003.0], [118.0, 3003.0], [116.0, 3003.0], [126.0, 3003.0], [124.0, 3003.0], [8.0, 3003.0], [143.0, 3003.0], [151.0, 3004.0], [9.0, 3002.0], [10.0, 3003.0], [11.0, 3003.0], [12.0, 3003.0], [13.0, 3003.0], [230.0, 4007.5], [1.0, 3513.5], [19.0, 4022.0], [20.0, 4023.0], [23.0, 3003.0], [30.0, 10224.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2367.0, "series": [{"data": [[13.0, 2367.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 0.0], [2.0, 0.0], [36.0, 0.0], [42.0, 0.0], [3.0, 0.0], [55.0, 0.0], [4.0, 0.0], [77.0, 0.0], [5.0, 0.0], [90.0, 0.0], [96.0, 0.0], [6.0, 0.0], [103.0, 0.0], [107.0, 0.0], [110.0, 0.0], [109.0, 0.0], [7.0, 0.0], [118.0, 0.0], [116.0, 0.0], [126.0, 0.0], [124.0, 0.0], [8.0, 0.0], [143.0, 0.0], [151.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [230.0, 0.0], [1.0, 0.0], [19.0, 0.0], [20.0, 0.0], [23.0, 0.0], [30.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.64246238E12, "maxY": 25.066666666666666, "series": [{"data": [[1.64246256E12, 6.0], [1.64246244E12, 25.066666666666666], [1.64246262E12, 0.9166666666666666], [1.6424625E12, 6.0], [1.64246238E12, 15.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.64246238E12, "maxY": 28.9, "series": [{"data": [[1.64246262E12, 0.11666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64246256E12, 6.083333333333333], [1.64246244E12, 28.9], [1.64246262E12, 1.05], [1.6424625E12, 6.0], [1.64246238E12, 11.716666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.64246238E12, "maxY": 28.9, "series": [{"data": [[1.64246256E12, 6.083333333333333], [1.64246244E12, 28.9], [1.64246262E12, 1.05], [1.6424625E12, 6.0], [1.64246238E12, 11.716666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-failure", "isController": false}, {"data": [[1.64246262E12, 0.11666666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.64246238E12, "maxY": 28.9, "series": [{"data": [[1.64246262E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64246256E12, 6.083333333333333], [1.64246244E12, 28.9], [1.64246262E12, 1.05], [1.6424625E12, 6.0], [1.64246238E12, 11.716666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

