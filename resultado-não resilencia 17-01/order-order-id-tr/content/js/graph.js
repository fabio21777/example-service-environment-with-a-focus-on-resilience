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
        data: {"result": {"minY": 192.0, "minX": 0.0, "maxY": 131209.0, "series": [{"data": [[0.0, 192.0], [0.1, 3703.0], [0.2, 3830.0], [0.3, 3958.0], [0.4, 4065.0], [0.5, 4250.0], [0.6, 4392.0], [0.7, 4450.0], [0.8, 4504.0], [0.9, 4621.0], [1.0, 4839.0], [1.1, 4908.0], [1.2, 5001.0], [1.3, 5001.0], [1.4, 5001.0], [1.5, 5001.0], [1.6, 5002.0], [1.7, 5002.0], [1.8, 5002.0], [1.9, 5002.0], [2.0, 5002.0], [2.1, 5002.0], [2.2, 5002.0], [2.3, 5002.0], [2.4, 5002.0], [2.5, 5002.0], [2.6, 5002.0], [2.7, 5002.0], [2.8, 5002.0], [2.9, 5002.0], [3.0, 5002.0], [3.1, 5002.0], [3.2, 5002.0], [3.3, 5002.0], [3.4, 5002.0], [3.5, 5002.0], [3.6, 5002.0], [3.7, 5002.0], [3.8, 5002.0], [3.9, 5002.0], [4.0, 5002.0], [4.1, 5002.0], [4.2, 5002.0], [4.3, 5002.0], [4.4, 5002.0], [4.5, 5002.0], [4.6, 5002.0], [4.7, 5002.0], [4.8, 5002.0], [4.9, 5002.0], [5.0, 5002.0], [5.1, 5002.0], [5.2, 5002.0], [5.3, 5002.0], [5.4, 5002.0], [5.5, 5002.0], [5.6, 5002.0], [5.7, 5002.0], [5.8, 5002.0], [5.9, 5002.0], [6.0, 5002.0], [6.1, 5002.0], [6.2, 5002.0], [6.3, 5002.0], [6.4, 5002.0], [6.5, 5002.0], [6.6, 5002.0], [6.7, 5002.0], [6.8, 5002.0], [6.9, 5002.0], [7.0, 5002.0], [7.1, 5002.0], [7.2, 5002.0], [7.3, 5002.0], [7.4, 5002.0], [7.5, 5002.0], [7.6, 5002.0], [7.7, 5002.0], [7.8, 5002.0], [7.9, 5002.0], [8.0, 5002.0], [8.1, 5002.0], [8.2, 5002.0], [8.3, 5002.0], [8.4, 5002.0], [8.5, 5002.0], [8.6, 5002.0], [8.7, 5003.0], [8.8, 5003.0], [8.9, 5003.0], [9.0, 5003.0], [9.1, 5003.0], [9.2, 5003.0], [9.3, 5003.0], [9.4, 5003.0], [9.5, 5003.0], [9.6, 5003.0], [9.7, 5003.0], [9.8, 5003.0], [9.9, 5003.0], [10.0, 5003.0], [10.1, 5003.0], [10.2, 5003.0], [10.3, 5003.0], [10.4, 5003.0], [10.5, 5003.0], [10.6, 5003.0], [10.7, 5003.0], [10.8, 5003.0], [10.9, 5003.0], [11.0, 5003.0], [11.1, 5003.0], [11.2, 5003.0], [11.3, 5003.0], [11.4, 5003.0], [11.5, 5003.0], [11.6, 5003.0], [11.7, 5003.0], [11.8, 5003.0], [11.9, 5003.0], [12.0, 5003.0], [12.1, 5003.0], [12.2, 5003.0], [12.3, 5003.0], [12.4, 5003.0], [12.5, 5003.0], [12.6, 5003.0], [12.7, 5003.0], [12.8, 5003.0], [12.9, 5003.0], [13.0, 5003.0], [13.1, 5003.0], [13.2, 5003.0], [13.3, 5003.0], [13.4, 5003.0], [13.5, 5003.0], [13.6, 5003.0], [13.7, 5003.0], [13.8, 5003.0], [13.9, 5003.0], [14.0, 5003.0], [14.1, 5003.0], [14.2, 5003.0], [14.3, 5003.0], [14.4, 5003.0], [14.5, 5003.0], [14.6, 5003.0], [14.7, 5003.0], [14.8, 5003.0], [14.9, 5003.0], [15.0, 5003.0], [15.1, 5003.0], [15.2, 5003.0], [15.3, 5003.0], [15.4, 5003.0], [15.5, 5003.0], [15.6, 5003.0], [15.7, 5003.0], [15.8, 5003.0], [15.9, 5003.0], [16.0, 5003.0], [16.1, 5003.0], [16.2, 5003.0], [16.3, 5003.0], [16.4, 5003.0], [16.5, 5003.0], [16.6, 5003.0], [16.7, 5003.0], [16.8, 5003.0], [16.9, 5003.0], [17.0, 5003.0], [17.1, 5003.0], [17.2, 5003.0], [17.3, 5003.0], [17.4, 5003.0], [17.5, 5003.0], [17.6, 5003.0], [17.7, 5003.0], [17.8, 5003.0], [17.9, 5003.0], [18.0, 5003.0], [18.1, 5003.0], [18.2, 5003.0], [18.3, 5003.0], [18.4, 5003.0], [18.5, 5003.0], [18.6, 5003.0], [18.7, 5003.0], [18.8, 5003.0], [18.9, 5003.0], [19.0, 5003.0], [19.1, 5003.0], [19.2, 5003.0], [19.3, 5003.0], [19.4, 5003.0], [19.5, 5003.0], [19.6, 5003.0], [19.7, 5003.0], [19.8, 5003.0], [19.9, 5003.0], [20.0, 5003.0], [20.1, 5003.0], [20.2, 5003.0], [20.3, 5003.0], [20.4, 5003.0], [20.5, 5003.0], [20.6, 5003.0], [20.7, 5003.0], [20.8, 5003.0], [20.9, 5003.0], [21.0, 5003.0], [21.1, 5003.0], [21.2, 5003.0], [21.3, 5003.0], [21.4, 5003.0], [21.5, 5003.0], [21.6, 5003.0], [21.7, 5003.0], [21.8, 5003.0], [21.9, 5003.0], [22.0, 5003.0], [22.1, 5003.0], [22.2, 5003.0], [22.3, 5003.0], [22.4, 5003.0], [22.5, 5003.0], [22.6, 5003.0], [22.7, 5003.0], [22.8, 5003.0], [22.9, 5003.0], [23.0, 5003.0], [23.1, 5003.0], [23.2, 5003.0], [23.3, 5003.0], [23.4, 5003.0], [23.5, 5003.0], [23.6, 5003.0], [23.7, 5003.0], [23.8, 5003.0], [23.9, 5003.0], [24.0, 5003.0], [24.1, 5003.0], [24.2, 5003.0], [24.3, 5003.0], [24.4, 5003.0], [24.5, 5003.0], [24.6, 5003.0], [24.7, 5003.0], [24.8, 5003.0], [24.9, 5003.0], [25.0, 5003.0], [25.1, 5003.0], [25.2, 5003.0], [25.3, 5003.0], [25.4, 5003.0], [25.5, 5003.0], [25.6, 5003.0], [25.7, 5003.0], [25.8, 5003.0], [25.9, 5003.0], [26.0, 5003.0], [26.1, 5003.0], [26.2, 5003.0], [26.3, 5003.0], [26.4, 5003.0], [26.5, 5003.0], [26.6, 5003.0], [26.7, 5003.0], [26.8, 5003.0], [26.9, 5003.0], [27.0, 5003.0], [27.1, 5003.0], [27.2, 5003.0], [27.3, 5003.0], [27.4, 5003.0], [27.5, 5003.0], [27.6, 5003.0], [27.7, 5003.0], [27.8, 5003.0], [27.9, 5003.0], [28.0, 5003.0], [28.1, 5003.0], [28.2, 5003.0], [28.3, 5003.0], [28.4, 5003.0], [28.5, 5003.0], [28.6, 5003.0], [28.7, 5003.0], [28.8, 5004.0], [28.9, 5004.0], [29.0, 5004.0], [29.1, 5004.0], [29.2, 5004.0], [29.3, 5004.0], [29.4, 5004.0], [29.5, 5004.0], [29.6, 5004.0], [29.7, 5004.0], [29.8, 5004.0], [29.9, 5004.0], [30.0, 5004.0], [30.1, 5004.0], [30.2, 5004.0], [30.3, 5004.0], [30.4, 5004.0], [30.5, 5004.0], [30.6, 5004.0], [30.7, 5004.0], [30.8, 5004.0], [30.9, 5004.0], [31.0, 5004.0], [31.1, 5004.0], [31.2, 5004.0], [31.3, 5004.0], [31.4, 5004.0], [31.5, 5004.0], [31.6, 5004.0], [31.7, 5004.0], [31.8, 5004.0], [31.9, 5004.0], [32.0, 5004.0], [32.1, 5004.0], [32.2, 5004.0], [32.3, 5004.0], [32.4, 5004.0], [32.5, 5004.0], [32.6, 5004.0], [32.7, 5004.0], [32.8, 5004.0], [32.9, 5004.0], [33.0, 5004.0], [33.1, 5004.0], [33.2, 5004.0], [33.3, 5004.0], [33.4, 5004.0], [33.5, 5004.0], [33.6, 5004.0], [33.7, 5004.0], [33.8, 5004.0], [33.9, 5004.0], [34.0, 5004.0], [34.1, 5004.0], [34.2, 5004.0], [34.3, 5004.0], [34.4, 5004.0], [34.5, 5004.0], [34.6, 5004.0], [34.7, 5004.0], [34.8, 5004.0], [34.9, 5004.0], [35.0, 5004.0], [35.1, 5004.0], [35.2, 5004.0], [35.3, 5004.0], [35.4, 5004.0], [35.5, 5004.0], [35.6, 5004.0], [35.7, 5004.0], [35.8, 5004.0], [35.9, 5004.0], [36.0, 5004.0], [36.1, 5004.0], [36.2, 5004.0], [36.3, 5004.0], [36.4, 5004.0], [36.5, 5004.0], [36.6, 5004.0], [36.7, 5004.0], [36.8, 5004.0], [36.9, 5004.0], [37.0, 5004.0], [37.1, 5004.0], [37.2, 5004.0], [37.3, 5004.0], [37.4, 5004.0], [37.5, 5004.0], [37.6, 5004.0], [37.7, 5004.0], [37.8, 5004.0], [37.9, 5004.0], [38.0, 5004.0], [38.1, 5004.0], [38.2, 5004.0], [38.3, 5004.0], [38.4, 5004.0], [38.5, 5004.0], [38.6, 5004.0], [38.7, 5004.0], [38.8, 5004.0], [38.9, 5004.0], [39.0, 5004.0], [39.1, 5004.0], [39.2, 5004.0], [39.3, 5004.0], [39.4, 5004.0], [39.5, 5004.0], [39.6, 5004.0], [39.7, 5004.0], [39.8, 5004.0], [39.9, 5004.0], [40.0, 5004.0], [40.1, 5004.0], [40.2, 5004.0], [40.3, 5004.0], [40.4, 5004.0], [40.5, 5004.0], [40.6, 5004.0], [40.7, 5004.0], [40.8, 5004.0], [40.9, 5004.0], [41.0, 5004.0], [41.1, 5004.0], [41.2, 5004.0], [41.3, 5004.0], [41.4, 5004.0], [41.5, 5004.0], [41.6, 5004.0], [41.7, 5004.0], [41.8, 5004.0], [41.9, 5004.0], [42.0, 5004.0], [42.1, 5004.0], [42.2, 5004.0], [42.3, 5004.0], [42.4, 5004.0], [42.5, 5004.0], [42.6, 5004.0], [42.7, 5004.0], [42.8, 5004.0], [42.9, 5004.0], [43.0, 5004.0], [43.1, 5004.0], [43.2, 5004.0], [43.3, 5004.0], [43.4, 5004.0], [43.5, 5004.0], [43.6, 5004.0], [43.7, 5004.0], [43.8, 5004.0], [43.9, 5004.0], [44.0, 5004.0], [44.1, 5004.0], [44.2, 5004.0], [44.3, 5004.0], [44.4, 5004.0], [44.5, 5004.0], [44.6, 5004.0], [44.7, 5004.0], [44.8, 5004.0], [44.9, 5004.0], [45.0, 5004.0], [45.1, 5004.0], [45.2, 5004.0], [45.3, 5004.0], [45.4, 5004.0], [45.5, 5004.0], [45.6, 5004.0], [45.7, 5004.0], [45.8, 5004.0], [45.9, 5004.0], [46.0, 5004.0], [46.1, 5004.0], [46.2, 5004.0], [46.3, 5004.0], [46.4, 5004.0], [46.5, 5004.0], [46.6, 5004.0], [46.7, 5004.0], [46.8, 5004.0], [46.9, 5004.0], [47.0, 5004.0], [47.1, 5004.0], [47.2, 5004.0], [47.3, 5004.0], [47.4, 5004.0], [47.5, 5004.0], [47.6, 5004.0], [47.7, 5004.0], [47.8, 5004.0], [47.9, 5004.0], [48.0, 5004.0], [48.1, 5004.0], [48.2, 5004.0], [48.3, 5004.0], [48.4, 5004.0], [48.5, 5004.0], [48.6, 5004.0], [48.7, 5004.0], [48.8, 5004.0], [48.9, 5004.0], [49.0, 5004.0], [49.1, 5004.0], [49.2, 5004.0], [49.3, 5004.0], [49.4, 5004.0], [49.5, 5004.0], [49.6, 5004.0], [49.7, 5004.0], [49.8, 5004.0], [49.9, 5004.0], [50.0, 5004.0], [50.1, 5004.0], [50.2, 5004.0], [50.3, 5004.0], [50.4, 5004.0], [50.5, 5004.0], [50.6, 5004.0], [50.7, 5004.0], [50.8, 5004.0], [50.9, 5004.0], [51.0, 5004.0], [51.1, 5004.0], [51.2, 5004.0], [51.3, 5004.0], [51.4, 5004.0], [51.5, 5004.0], [51.6, 5004.0], [51.7, 5004.0], [51.8, 5004.0], [51.9, 5004.0], [52.0, 5004.0], [52.1, 5004.0], [52.2, 5004.0], [52.3, 5004.0], [52.4, 5004.0], [52.5, 5004.0], [52.6, 5004.0], [52.7, 5004.0], [52.8, 5004.0], [52.9, 5004.0], [53.0, 5004.0], [53.1, 5004.0], [53.2, 5004.0], [53.3, 5004.0], [53.4, 5004.0], [53.5, 5004.0], [53.6, 5004.0], [53.7, 5004.0], [53.8, 5004.0], [53.9, 5004.0], [54.0, 5004.0], [54.1, 5004.0], [54.2, 5004.0], [54.3, 5004.0], [54.4, 5004.0], [54.5, 5004.0], [54.6, 5004.0], [54.7, 5004.0], [54.8, 5004.0], [54.9, 5004.0], [55.0, 5004.0], [55.1, 5004.0], [55.2, 5004.0], [55.3, 5004.0], [55.4, 5004.0], [55.5, 5004.0], [55.6, 5004.0], [55.7, 5004.0], [55.8, 5004.0], [55.9, 5004.0], [56.0, 5004.0], [56.1, 5004.0], [56.2, 5004.0], [56.3, 5004.0], [56.4, 5004.0], [56.5, 5004.0], [56.6, 5004.0], [56.7, 5004.0], [56.8, 5004.0], [56.9, 5004.0], [57.0, 5004.0], [57.1, 5004.0], [57.2, 5004.0], [57.3, 5004.0], [57.4, 5004.0], [57.5, 5004.0], [57.6, 5004.0], [57.7, 5004.0], [57.8, 5004.0], [57.9, 5004.0], [58.0, 5004.0], [58.1, 5004.0], [58.2, 5004.0], [58.3, 5004.0], [58.4, 5004.0], [58.5, 5004.0], [58.6, 5004.0], [58.7, 5004.0], [58.8, 5004.0], [58.9, 5004.0], [59.0, 5004.0], [59.1, 5004.0], [59.2, 5004.0], [59.3, 5004.0], [59.4, 5004.0], [59.5, 5004.0], [59.6, 5004.0], [59.7, 5004.0], [59.8, 5004.0], [59.9, 5004.0], [60.0, 5004.0], [60.1, 5004.0], [60.2, 5004.0], [60.3, 5004.0], [60.4, 5004.0], [60.5, 5004.0], [60.6, 5004.0], [60.7, 5004.0], [60.8, 5004.0], [60.9, 5004.0], [61.0, 5004.0], [61.1, 5004.0], [61.2, 5004.0], [61.3, 5004.0], [61.4, 5004.0], [61.5, 5004.0], [61.6, 5004.0], [61.7, 5004.0], [61.8, 5004.0], [61.9, 5004.0], [62.0, 5004.0], [62.1, 5004.0], [62.2, 5004.0], [62.3, 5004.0], [62.4, 5004.0], [62.5, 5004.0], [62.6, 5004.0], [62.7, 5004.0], [62.8, 5004.0], [62.9, 5004.0], [63.0, 5004.0], [63.1, 5004.0], [63.2, 5004.0], [63.3, 5004.0], [63.4, 5004.0], [63.5, 5004.0], [63.6, 5004.0], [63.7, 5004.0], [63.8, 5004.0], [63.9, 5004.0], [64.0, 5004.0], [64.1, 5004.0], [64.2, 5004.0], [64.3, 5004.0], [64.4, 5004.0], [64.5, 5004.0], [64.6, 5004.0], [64.7, 5004.0], [64.8, 5004.0], [64.9, 5004.0], [65.0, 5004.0], [65.1, 5005.0], [65.2, 5005.0], [65.3, 5005.0], [65.4, 5005.0], [65.5, 5005.0], [65.6, 5005.0], [65.7, 5005.0], [65.8, 5005.0], [65.9, 5005.0], [66.0, 5005.0], [66.1, 5005.0], [66.2, 5005.0], [66.3, 5005.0], [66.4, 5005.0], [66.5, 5005.0], [66.6, 5005.0], [66.7, 5005.0], [66.8, 5005.0], [66.9, 5005.0], [67.0, 5005.0], [67.1, 5005.0], [67.2, 5005.0], [67.3, 5005.0], [67.4, 5005.0], [67.5, 5005.0], [67.6, 5005.0], [67.7, 5005.0], [67.8, 5005.0], [67.9, 5005.0], [68.0, 5005.0], [68.1, 5005.0], [68.2, 5005.0], [68.3, 5005.0], [68.4, 5005.0], [68.5, 5005.0], [68.6, 5005.0], [68.7, 5005.0], [68.8, 5005.0], [68.9, 5005.0], [69.0, 5005.0], [69.1, 5005.0], [69.2, 5005.0], [69.3, 5005.0], [69.4, 5005.0], [69.5, 5005.0], [69.6, 5005.0], [69.7, 5005.0], [69.8, 5005.0], [69.9, 5005.0], [70.0, 5005.0], [70.1, 5005.0], [70.2, 5005.0], [70.3, 5005.0], [70.4, 5005.0], [70.5, 5005.0], [70.6, 5005.0], [70.7, 5005.0], [70.8, 5005.0], [70.9, 5005.0], [71.0, 5005.0], [71.1, 5005.0], [71.2, 5005.0], [71.3, 5005.0], [71.4, 5005.0], [71.5, 5005.0], [71.6, 5005.0], [71.7, 5005.0], [71.8, 5005.0], [71.9, 5005.0], [72.0, 5005.0], [72.1, 5005.0], [72.2, 5005.0], [72.3, 5005.0], [72.4, 5005.0], [72.5, 5005.0], [72.6, 5005.0], [72.7, 5005.0], [72.8, 5005.0], [72.9, 5005.0], [73.0, 5005.0], [73.1, 5005.0], [73.2, 5005.0], [73.3, 5005.0], [73.4, 5005.0], [73.5, 5005.0], [73.6, 5005.0], [73.7, 5005.0], [73.8, 5005.0], [73.9, 5005.0], [74.0, 5005.0], [74.1, 5005.0], [74.2, 5005.0], [74.3, 5005.0], [74.4, 5005.0], [74.5, 5005.0], [74.6, 5005.0], [74.7, 5005.0], [74.8, 5005.0], [74.9, 5005.0], [75.0, 5005.0], [75.1, 5005.0], [75.2, 5005.0], [75.3, 5005.0], [75.4, 5005.0], [75.5, 5005.0], [75.6, 5005.0], [75.7, 5005.0], [75.8, 5005.0], [75.9, 5005.0], [76.0, 5005.0], [76.1, 5005.0], [76.2, 5005.0], [76.3, 5005.0], [76.4, 5005.0], [76.5, 5005.0], [76.6, 5005.0], [76.7, 5005.0], [76.8, 5005.0], [76.9, 5005.0], [77.0, 5005.0], [77.1, 5005.0], [77.2, 5005.0], [77.3, 5005.0], [77.4, 5005.0], [77.5, 5005.0], [77.6, 5005.0], [77.7, 5005.0], [77.8, 5005.0], [77.9, 5005.0], [78.0, 5005.0], [78.1, 5005.0], [78.2, 5005.0], [78.3, 5005.0], [78.4, 5005.0], [78.5, 5005.0], [78.6, 5005.0], [78.7, 5005.0], [78.8, 5005.0], [78.9, 5005.0], [79.0, 5005.0], [79.1, 5005.0], [79.2, 5005.0], [79.3, 5005.0], [79.4, 5005.0], [79.5, 5005.0], [79.6, 5005.0], [79.7, 5005.0], [79.8, 5005.0], [79.9, 5005.0], [80.0, 5005.0], [80.1, 5005.0], [80.2, 5005.0], [80.3, 5005.0], [80.4, 5005.0], [80.5, 5005.0], [80.6, 5005.0], [80.7, 5005.0], [80.8, 5005.0], [80.9, 5005.0], [81.0, 5005.0], [81.1, 5005.0], [81.2, 5005.0], [81.3, 5005.0], [81.4, 5005.0], [81.5, 5005.0], [81.6, 5005.0], [81.7, 5005.0], [81.8, 5005.0], [81.9, 5005.0], [82.0, 5005.0], [82.1, 5005.0], [82.2, 5005.0], [82.3, 5005.0], [82.4, 5005.0], [82.5, 5005.0], [82.6, 5005.0], [82.7, 5005.0], [82.8, 5005.0], [82.9, 5005.0], [83.0, 5005.0], [83.1, 5005.0], [83.2, 5005.0], [83.3, 5005.0], [83.4, 5005.0], [83.5, 5005.0], [83.6, 5005.0], [83.7, 5006.0], [83.8, 5006.0], [83.9, 5006.0], [84.0, 5006.0], [84.1, 5006.0], [84.2, 5006.0], [84.3, 5006.0], [84.4, 5006.0], [84.5, 5006.0], [84.6, 5006.0], [84.7, 5006.0], [84.8, 5006.0], [84.9, 5006.0], [85.0, 5006.0], [85.1, 5006.0], [85.2, 5006.0], [85.3, 5006.0], [85.4, 5006.0], [85.5, 5006.0], [85.6, 5006.0], [85.7, 5006.0], [85.8, 5006.0], [85.9, 5006.0], [86.0, 5006.0], [86.1, 5006.0], [86.2, 5006.0], [86.3, 5006.0], [86.4, 5006.0], [86.5, 5006.0], [86.6, 5006.0], [86.7, 5006.0], [86.8, 5006.0], [86.9, 5006.0], [87.0, 5006.0], [87.1, 5006.0], [87.2, 5006.0], [87.3, 5006.0], [87.4, 5006.0], [87.5, 5006.0], [87.6, 5006.0], [87.7, 5006.0], [87.8, 5006.0], [87.9, 5006.0], [88.0, 5006.0], [88.1, 5006.0], [88.2, 5006.0], [88.3, 5006.0], [88.4, 5006.0], [88.5, 5006.0], [88.6, 5006.0], [88.7, 5006.0], [88.8, 5006.0], [88.9, 5006.0], [89.0, 5006.0], [89.1, 5006.0], [89.2, 5006.0], [89.3, 5006.0], [89.4, 5006.0], [89.5, 5006.0], [89.6, 5006.0], [89.7, 5006.0], [89.8, 5006.0], [89.9, 5006.0], [90.0, 5006.0], [90.1, 5006.0], [90.2, 5006.0], [90.3, 5006.0], [90.4, 5007.0], [90.5, 5007.0], [90.6, 5007.0], [90.7, 5007.0], [90.8, 5007.0], [90.9, 5007.0], [91.0, 5007.0], [91.1, 5007.0], [91.2, 5007.0], [91.3, 5007.0], [91.4, 5007.0], [91.5, 5007.0], [91.6, 5007.0], [91.7, 5007.0], [91.8, 5008.0], [91.9, 5008.0], [92.0, 5008.0], [92.1, 5008.0], [92.2, 5008.0], [92.3, 5008.0], [92.4, 5008.0], [92.5, 5008.0], [92.6, 5008.0], [92.7, 5008.0], [92.8, 5008.0], [92.9, 5008.0], [93.0, 5009.0], [93.1, 5009.0], [93.2, 5009.0], [93.3, 5009.0], [93.4, 5009.0], [93.5, 5010.0], [93.6, 5010.0], [93.7, 5010.0], [93.8, 5011.0], [93.9, 5011.0], [94.0, 5011.0], [94.1, 5011.0], [94.2, 5012.0], [94.3, 5012.0], [94.4, 5013.0], [94.5, 5015.0], [94.6, 5016.0], [94.7, 5018.0], [94.8, 5019.0], [94.9, 5034.0], [95.0, 6008.0], [95.1, 6023.0], [95.2, 8024.0], [95.3, 8044.0], [95.4, 129169.0], [95.5, 129209.0], [95.6, 129841.0], [95.7, 129884.0], [95.8, 129906.0], [95.9, 130072.0], [96.0, 130109.0], [96.1, 130126.0], [96.2, 130151.0], [96.3, 130179.0], [96.4, 130204.0], [96.5, 130220.0], [96.6, 130265.0], [96.7, 130284.0], [96.8, 130300.0], [96.9, 130306.0], [97.0, 130333.0], [97.1, 130347.0], [97.2, 130502.0], [97.3, 130507.0], [97.4, 130507.0], [97.5, 130511.0], [97.6, 130529.0], [97.7, 130540.0], [97.8, 130609.0], [97.9, 130632.0], [98.0, 130737.0], [98.1, 130747.0], [98.2, 130775.0], [98.3, 130793.0], [98.4, 130828.0], [98.5, 130836.0], [98.6, 130859.0], [98.7, 130861.0], [98.8, 130912.0], [98.9, 130918.0], [99.0, 130934.0], [99.1, 130944.0], [99.2, 130968.0], [99.3, 130996.0], [99.4, 131010.0], [99.5, 131018.0], [99.6, 131121.0], [99.7, 131137.0], [99.8, 131157.0], [99.9, 131193.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 3041.0, "series": [{"data": [[131200.0, 3.0], [100.0, 2.0], [131100.0, 12.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 3.0], [4200.0, 2.0], [4100.0, 2.0], [4300.0, 3.0], [4400.0, 5.0], [4500.0, 3.0], [4600.0, 4.0], [4800.0, 2.0], [5000.0, 3041.0], [4900.0, 4.0], [6000.0, 7.0], [130700.0, 11.0], [129100.0, 3.0], [8000.0, 7.0], [130100.0, 13.0], [130200.0, 14.0], [130300.0, 12.0], [130400.0, 1.0], [129200.0, 2.0], [129800.0, 7.0], [129900.0, 2.0], [130000.0, 5.0], [131000.0, 7.0], [130800.0, 14.0], [130900.0, 19.0], [130500.0, 18.0], [130600.0, 7.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 131200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 3203.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 38.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 3203.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.77333333333338, "minX": 1.64246238E12, "maxY": 150.0, "series": [{"data": [[1.64246244E12, 150.0], [1.64246262E12, 90.77333333333338], [1.6424625E12, 150.0], [1.64246238E12, 150.0]], "isOverall": false, "label": "ddos carts-id", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5122.867894056839, "minX": 1.0, "maxY": 131193.0, "series": [{"data": [[4.0, 130507.0], [6.0, 130507.25], [7.0, 130503.0], [8.0, 130540.0], [10.0, 130859.0], [12.0, 130741.66666666667], [13.0, 130535.0], [14.0, 130502.0], [78.0, 130156.64516129033], [83.0, 130529.0], [81.0, 130301.0], [80.0, 130361.16129032258], [87.0, 130835.5], [85.0, 130364.5], [84.0, 130280.0], [91.0, 130878.8], [90.0, 130912.0], [89.0, 130511.0], [95.0, 130813.0], [94.0, 130800.0], [93.0, 130772.0], [92.0, 130934.0], [99.0, 130766.66666666667], [103.0, 131132.0], [102.0, 130965.0], [101.0, 130877.5], [100.0, 130849.0], [105.0, 130759.5], [111.0, 130637.0], [109.0, 130625.0], [108.0, 130947.33333333333], [113.0, 130892.0], [119.0, 130585.0], [121.0, 130996.0], [126.0, 131073.0], [124.0, 130949.5], [134.0, 130747.0], [133.0, 131183.0], [131.0, 130821.0], [129.0, 131063.0], [128.0, 130820.5], [141.0, 131176.0], [140.0, 131017.0], [139.0, 131193.0], [138.0, 131191.0], [137.0, 131149.0], [150.0, 5122.867894056839], [147.0, 129206.5], [145.0, 131065.75], [144.0, 131085.0], [1.0, 130509.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[147.26056120875734, 10809.12642614862]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.64246238E12, "maxY": 93545.4, "series": [{"data": [[1.64246244E12, 93545.4], [1.64246262E12, 5232.5], [1.6424625E12, 61271.7], [1.64246238E12, 9337.916666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64246244E12, 0.0], [1.64246262E12, 0.0], [1.6424625E12, 0.0], [1.64246238E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4846.171428571431, "minX": 1.64246238E12, "maxY": 130540.80666666666, "series": [{"data": [[1.64246244E12, 5004.030998851893], [1.64246262E12, 130540.80666666666], [1.6424625E12, 5029.060473269056], [1.64246238E12, 4846.171428571431]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64246238E12, "maxY": 785.9809523809521, "series": [{"data": [[1.64246244E12, 0.0], [1.64246262E12, 0.0], [1.6424625E12, 0.0], [1.64246238E12, 785.9809523809521]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64246238E12, "maxY": 4.9E-324, "series": [{"data": [[1.64246244E12, 0.0], [1.64246262E12, 0.0], [1.6424625E12, 0.0], [1.64246238E12, 0.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.64246238E12, "maxY": 5060.0, "series": [{"data": [[1.64246238E12, 5060.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64246238E12, 192.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64246238E12, 192.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64246238E12, 192.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64246238E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64246238E12, 4403.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246238E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4040.0, "minX": 2.0, "maxY": 130601.0, "series": [{"data": [[10.0, 4040.0], [88.0, 4472.0], [54.0, 4971.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 5005.5], [35.0, 5004.0], [41.0, 5004.0], [42.0, 5004.0], [46.0, 5004.0], [3.0, 5004.0], [52.0, 5004.0], [54.0, 130601.0], [58.0, 5004.0], [63.0, 5004.0], [67.0, 5004.0], [4.0, 5002.0], [64.0, 5004.0], [71.0, 5004.0], [70.0, 5004.0], [76.0, 5004.0], [77.0, 67424.5], [83.0, 5004.0], [5.0, 129180.0], [84.0, 5004.0], [87.0, 5004.0], [88.0, 5005.0], [92.0, 5004.0], [93.0, 5004.0], [98.0, 5004.0], [101.0, 5004.0], [105.0, 5004.0], [106.0, 5004.0], [108.0, 5004.0], [111.0, 5004.0], [113.0, 5004.0], [7.0, 69275.5], [119.0, 5004.0], [120.0, 5004.0], [124.0, 5004.0], [8.0, 5003.5], [9.0, 5005.0], [11.0, 5003.5], [14.0, 5004.0], [16.0, 5004.5], [17.0, 5004.0], [22.0, 5003.5], [23.0, 5004.0], [24.0, 5004.0], [26.0, 5003.5], [28.0, 5004.0], [30.0, 5004.0], [31.0, 5004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 124.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 4962.0, "series": [{"data": [[10.0, 3991.5], [88.0, 4448.0], [54.0, 4962.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [35.0, 0.0], [41.0, 0.0], [42.0, 0.0], [46.0, 0.0], [3.0, 0.0], [52.0, 0.0], [54.0, 0.0], [58.0, 0.0], [63.0, 0.0], [67.0, 0.0], [4.0, 0.0], [64.0, 0.0], [71.0, 0.0], [70.0, 0.0], [76.0, 0.0], [77.0, 0.0], [83.0, 0.0], [5.0, 0.0], [84.0, 0.0], [87.0, 0.0], [88.0, 0.0], [92.0, 0.0], [93.0, 0.0], [98.0, 0.0], [101.0, 0.0], [105.0, 0.0], [106.0, 0.0], [108.0, 0.0], [111.0, 0.0], [113.0, 0.0], [7.0, 0.0], [119.0, 0.0], [120.0, 0.0], [124.0, 0.0], [8.0, 0.0], [9.0, 0.0], [11.0, 0.0], [14.0, 0.0], [16.0, 0.0], [17.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [26.0, 0.0], [28.0, 0.0], [30.0, 0.0], [31.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 124.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.416666666666667, "minX": 1.64246238E12, "maxY": 29.616666666666667, "series": [{"data": [[1.64246244E12, 29.616666666666667], [1.6424625E12, 19.016666666666666], [1.64246238E12, 5.416666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6424625E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.64246238E12, "maxY": 29.033333333333335, "series": [{"data": [[1.64246238E12, 0.6666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64246244E12, 29.033333333333335], [1.6424625E12, 19.016666666666666], [1.64246238E12, 2.8333333333333335]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.64246262E12, 2.5]], "isOverall": false, "label": "Non HTTP response code: java.net.ConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64246262E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.64246238E12, "maxY": 29.033333333333335, "series": [{"data": [[1.64246244E12, 29.033333333333335], [1.64246262E12, 2.5], [1.6424625E12, 19.016666666666666], [1.64246238E12, 2.8333333333333335]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-failure", "isController": false}, {"data": [[1.64246238E12, 0.6666666666666666]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.64246238E12, "maxY": 29.033333333333335, "series": [{"data": [[1.64246238E12, 0.6666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64246244E12, 29.033333333333335], [1.64246262E12, 2.5], [1.6424625E12, 19.016666666666666], [1.64246238E12, 2.8333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64246262E12, "title": "Total Transactions Per Second"}},
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

