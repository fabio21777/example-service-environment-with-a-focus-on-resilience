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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 4048.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 3.0], [29.5, 3.0], [29.6, 3.0], [29.7, 3.0], [29.8, 3.0], [29.9, 3.0], [30.0, 3.0], [30.1, 3.0], [30.2, 3.0], [30.3, 3.0], [30.4, 3.0], [30.5, 3.0], [30.6, 3.0], [30.7, 3.0], [30.8, 3.0], [30.9, 3.0], [31.0, 3.0], [31.1, 3.0], [31.2, 3.0], [31.3, 3.0], [31.4, 3.0], [31.5, 3.0], [31.6, 3.0], [31.7, 3.0], [31.8, 3.0], [31.9, 3.0], [32.0, 3.0], [32.1, 3.0], [32.2, 3.0], [32.3, 3.0], [32.4, 3.0], [32.5, 3.0], [32.6, 3.0], [32.7, 4.0], [32.8, 4.0], [32.9, 4.0], [33.0, 4.0], [33.1, 4.0], [33.2, 4.0], [33.3, 4.0], [33.4, 4.0], [33.5, 4.0], [33.6, 4.0], [33.7, 4.0], [33.8, 4.0], [33.9, 4.0], [34.0, 4.0], [34.1, 4.0], [34.2, 4.0], [34.3, 4.0], [34.4, 4.0], [34.5, 4.0], [34.6, 4.0], [34.7, 4.0], [34.8, 4.0], [34.9, 4.0], [35.0, 4.0], [35.1, 4.0], [35.2, 4.0], [35.3, 4.0], [35.4, 4.0], [35.5, 4.0], [35.6, 4.0], [35.7, 4.0], [35.8, 4.0], [35.9, 4.0], [36.0, 4.0], [36.1, 4.0], [36.2, 4.0], [36.3, 4.0], [36.4, 4.0], [36.5, 4.0], [36.6, 4.0], [36.7, 4.0], [36.8, 4.0], [36.9, 4.0], [37.0, 4.0], [37.1, 4.0], [37.2, 4.0], [37.3, 4.0], [37.4, 4.0], [37.5, 5.0], [37.6, 5.0], [37.7, 5.0], [37.8, 5.0], [37.9, 5.0], [38.0, 5.0], [38.1, 5.0], [38.2, 5.0], [38.3, 5.0], [38.4, 5.0], [38.5, 5.0], [38.6, 5.0], [38.7, 5.0], [38.8, 5.0], [38.9, 5.0], [39.0, 5.0], [39.1, 5.0], [39.2, 5.0], [39.3, 5.0], [39.4, 5.0], [39.5, 5.0], [39.6, 5.0], [39.7, 5.0], [39.8, 5.0], [39.9, 5.0], [40.0, 5.0], [40.1, 5.0], [40.2, 5.0], [40.3, 5.0], [40.4, 5.0], [40.5, 5.0], [40.6, 5.0], [40.7, 6.0], [40.8, 6.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 6.0], [41.3, 6.0], [41.4, 6.0], [41.5, 6.0], [41.6, 6.0], [41.7, 6.0], [41.8, 6.0], [41.9, 6.0], [42.0, 6.0], [42.1, 6.0], [42.2, 6.0], [42.3, 6.0], [42.4, 6.0], [42.5, 6.0], [42.6, 6.0], [42.7, 6.0], [42.8, 6.0], [42.9, 6.0], [43.0, 6.0], [43.1, 6.0], [43.2, 7.0], [43.3, 7.0], [43.4, 7.0], [43.5, 7.0], [43.6, 7.0], [43.7, 7.0], [43.8, 7.0], [43.9, 7.0], [44.0, 7.0], [44.1, 7.0], [44.2, 7.0], [44.3, 7.0], [44.4, 7.0], [44.5, 7.0], [44.6, 7.0], [44.7, 7.0], [44.8, 7.0], [44.9, 7.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 9.0], [46.6, 9.0], [46.7, 9.0], [46.8, 9.0], [46.9, 9.0], [47.0, 9.0], [47.1, 9.0], [47.2, 9.0], [47.3, 9.0], [47.4, 9.0], [47.5, 9.0], [47.6, 10.0], [47.7, 10.0], [47.8, 10.0], [47.9, 10.0], [48.0, 10.0], [48.1, 10.0], [48.2, 10.0], [48.3, 10.0], [48.4, 11.0], [48.5, 11.0], [48.6, 11.0], [48.7, 11.0], [48.8, 11.0], [48.9, 11.0], [49.0, 11.0], [49.1, 12.0], [49.2, 12.0], [49.3, 12.0], [49.4, 12.0], [49.5, 12.0], [49.6, 13.0], [49.7, 13.0], [49.8, 13.0], [49.9, 14.0], [50.0, 14.0], [50.1, 14.0], [50.2, 15.0], [50.3, 17.0], [50.4, 20.0], [50.5, 79.0], [50.6, 80.0], [50.7, 81.0], [50.8, 81.0], [50.9, 81.0], [51.0, 82.0], [51.1, 82.0], [51.2, 83.0], [51.3, 83.0], [51.4, 83.0], [51.5, 83.0], [51.6, 83.0], [51.7, 83.0], [51.8, 84.0], [51.9, 84.0], [52.0, 84.0], [52.1, 84.0], [52.2, 84.0], [52.3, 84.0], [52.4, 84.0], [52.5, 84.0], [52.6, 84.0], [52.7, 85.0], [52.8, 85.0], [52.9, 85.0], [53.0, 85.0], [53.1, 85.0], [53.2, 85.0], [53.3, 85.0], [53.4, 85.0], [53.5, 85.0], [53.6, 86.0], [53.7, 86.0], [53.8, 86.0], [53.9, 86.0], [54.0, 86.0], [54.1, 86.0], [54.2, 86.0], [54.3, 86.0], [54.4, 86.0], [54.5, 86.0], [54.6, 87.0], [54.7, 87.0], [54.8, 87.0], [54.9, 87.0], [55.0, 87.0], [55.1, 87.0], [55.2, 87.0], [55.3, 87.0], [55.4, 87.0], [55.5, 87.0], [55.6, 87.0], [55.7, 88.0], [55.8, 88.0], [55.9, 88.0], [56.0, 88.0], [56.1, 88.0], [56.2, 88.0], [56.3, 88.0], [56.4, 88.0], [56.5, 88.0], [56.6, 88.0], [56.7, 88.0], [56.8, 88.0], [56.9, 89.0], [57.0, 89.0], [57.1, 89.0], [57.2, 89.0], [57.3, 89.0], [57.4, 89.0], [57.5, 89.0], [57.6, 89.0], [57.7, 89.0], [57.8, 89.0], [57.9, 89.0], [58.0, 89.0], [58.1, 89.0], [58.2, 89.0], [58.3, 89.0], [58.4, 90.0], [58.5, 90.0], [58.6, 90.0], [58.7, 90.0], [58.8, 90.0], [58.9, 90.0], [59.0, 90.0], [59.1, 90.0], [59.2, 90.0], [59.3, 90.0], [59.4, 90.0], [59.5, 90.0], [59.6, 90.0], [59.7, 90.0], [59.8, 91.0], [59.9, 91.0], [60.0, 91.0], [60.1, 91.0], [60.2, 91.0], [60.3, 91.0], [60.4, 91.0], [60.5, 91.0], [60.6, 91.0], [60.7, 91.0], [60.8, 91.0], [60.9, 91.0], [61.0, 92.0], [61.1, 92.0], [61.2, 92.0], [61.3, 92.0], [61.4, 92.0], [61.5, 92.0], [61.6, 92.0], [61.7, 92.0], [61.8, 92.0], [61.9, 92.0], [62.0, 92.0], [62.1, 92.0], [62.2, 92.0], [62.3, 93.0], [62.4, 93.0], [62.5, 93.0], [62.6, 93.0], [62.7, 93.0], [62.8, 93.0], [62.9, 93.0], [63.0, 93.0], [63.1, 93.0], [63.2, 93.0], [63.3, 93.0], [63.4, 93.0], [63.5, 93.0], [63.6, 94.0], [63.7, 94.0], [63.8, 94.0], [63.9, 94.0], [64.0, 94.0], [64.1, 94.0], [64.2, 94.0], [64.3, 94.0], [64.4, 94.0], [64.5, 94.0], [64.6, 94.0], [64.7, 94.0], [64.8, 95.0], [64.9, 95.0], [65.0, 95.0], [65.1, 95.0], [65.2, 95.0], [65.3, 95.0], [65.4, 95.0], [65.5, 95.0], [65.6, 95.0], [65.7, 95.0], [65.8, 95.0], [65.9, 95.0], [66.0, 96.0], [66.1, 96.0], [66.2, 96.0], [66.3, 96.0], [66.4, 96.0], [66.5, 96.0], [66.6, 96.0], [66.7, 96.0], [66.8, 96.0], [66.9, 96.0], [67.0, 96.0], [67.1, 97.0], [67.2, 97.0], [67.3, 97.0], [67.4, 97.0], [67.5, 97.0], [67.6, 97.0], [67.7, 97.0], [67.8, 97.0], [67.9, 97.0], [68.0, 97.0], [68.1, 98.0], [68.2, 98.0], [68.3, 98.0], [68.4, 98.0], [68.5, 98.0], [68.6, 98.0], [68.7, 98.0], [68.8, 98.0], [68.9, 99.0], [69.0, 99.0], [69.1, 99.0], [69.2, 99.0], [69.3, 99.0], [69.4, 99.0], [69.5, 99.0], [69.6, 100.0], [69.7, 100.0], [69.8, 100.0], [69.9, 100.0], [70.0, 100.0], [70.1, 100.0], [70.2, 101.0], [70.3, 101.0], [70.4, 101.0], [70.5, 101.0], [70.6, 101.0], [70.7, 102.0], [70.8, 102.0], [70.9, 102.0], [71.0, 102.0], [71.1, 103.0], [71.2, 103.0], [71.3, 104.0], [71.4, 104.0], [71.5, 105.0], [71.6, 106.0], [71.7, 108.0], [71.8, 113.0], [71.9, 182.0], [72.0, 184.0], [72.1, 185.0], [72.2, 187.0], [72.3, 187.0], [72.4, 188.0], [72.5, 190.0], [72.6, 190.0], [72.7, 191.0], [72.8, 191.0], [72.9, 192.0], [73.0, 193.0], [73.1, 194.0], [73.2, 195.0], [73.3, 196.0], [73.4, 198.0], [73.5, 199.0], [73.6, 200.0], [73.7, 201.0], [73.8, 203.0], [73.9, 209.0], [74.0, 289.0], [74.1, 293.0], [74.2, 299.0], [74.3, 314.0], [74.4, 390.0], [74.5, 400.0], [74.6, 406.0], [74.7, 486.0], [74.8, 494.0], [74.9, 583.0], [75.0, 682.0], [75.1, 705.0], [75.2, 804.0], [75.3, 887.0], [75.4, 896.0], [75.5, 899.0], [75.6, 902.0], [75.7, 909.0], [75.8, 986.0], [75.9, 991.0], [76.0, 996.0], [76.1, 999.0], [76.2, 1004.0], [76.3, 1007.0], [76.4, 1017.0], [76.5, 1088.0], [76.6, 1094.0], [76.7, 1100.0], [76.8, 1106.0], [76.9, 1176.0], [77.0, 1191.0], [77.1, 1197.0], [77.2, 1199.0], [77.3, 1203.0], [77.4, 1217.0], [77.5, 1282.0], [77.6, 1290.0], [77.7, 1295.0], [77.8, 1300.0], [77.9, 1306.0], [78.0, 1371.0], [78.1, 1386.0], [78.2, 1391.0], [78.3, 1396.0], [78.4, 1399.0], [78.5, 1402.0], [78.6, 1410.0], [78.7, 1481.0], [78.8, 1489.0], [78.9, 1494.0], [79.0, 1495.0], [79.1, 1498.0], [79.2, 1500.0], [79.3, 1505.0], [79.4, 1514.0], [79.5, 1574.0], [79.6, 1585.0], [79.7, 1590.0], [79.8, 1593.0], [79.9, 1595.0], [80.0, 1597.0], [80.1, 1600.0], [80.2, 1601.0], [80.3, 1606.0], [80.4, 1614.0], [80.5, 1675.0], [80.6, 1685.0], [80.7, 1690.0], [80.8, 1692.0], [80.9, 1694.0], [81.0, 1696.0], [81.1, 1698.0], [81.2, 1700.0], [81.3, 1703.0], [81.4, 1706.0], [81.5, 1715.0], [81.6, 1779.0], [81.7, 1783.0], [81.8, 1787.0], [81.9, 1788.0], [82.0, 1791.0], [82.1, 1793.0], [82.2, 1795.0], [82.3, 1797.0], [82.4, 1798.0], [82.5, 1800.0], [82.6, 1803.0], [82.7, 1805.0], [82.8, 1810.0], [82.9, 1819.0], [83.0, 1875.0], [83.1, 1879.0], [83.2, 1884.0], [83.3, 1888.0], [83.4, 1892.0], [83.5, 1894.0], [83.6, 1896.0], [83.7, 1898.0], [83.8, 1899.0], [83.9, 1901.0], [84.0, 1903.0], [84.1, 1905.0], [84.2, 1913.0], [84.3, 1925.0], [84.4, 1974.0], [84.5, 1983.0], [84.6, 1986.0], [84.7, 1991.0], [84.8, 1993.0], [84.9, 1995.0], [85.0, 1996.0], [85.1, 1999.0], [85.2, 2001.0], [85.3, 2003.0], [85.4, 2005.0], [85.5, 2013.0], [85.6, 2063.0], [85.7, 2082.0], [85.8, 2091.0], [85.9, 2094.0], [86.0, 2096.0], [86.1, 2099.0], [86.2, 2101.0], [86.3, 2106.0], [86.4, 2121.0], [86.5, 2168.0], [86.6, 2185.0], [86.7, 2191.0], [86.8, 2195.0], [86.9, 2198.0], [87.0, 2202.0], [87.1, 2228.0], [87.2, 2280.0], [87.3, 2290.0], [87.4, 2294.0], [87.5, 2296.0], [87.6, 2302.0], [87.7, 2315.0], [87.8, 2367.0], [87.9, 2388.0], [88.0, 2397.0], [88.1, 2403.0], [88.2, 2459.0], [88.3, 2485.0], [88.4, 2493.0], [88.5, 2500.0], [88.6, 2512.0], [88.7, 2530.0], [88.8, 2583.0], [88.9, 2590.0], [89.0, 2596.0], [89.1, 2605.0], [89.2, 2641.0], [89.3, 2674.0], [89.4, 2690.0], [89.5, 2696.0], [89.6, 2709.0], [89.7, 2765.0], [89.8, 2786.0], [89.9, 2793.0], [90.0, 2797.0], [90.1, 2808.0], [90.2, 2840.0], [90.3, 2891.0], [90.4, 2898.0], [90.5, 2919.0], [90.6, 2974.0], [90.7, 2989.0], [90.8, 3000.0], [90.9, 3001.0], [91.0, 3001.0], [91.1, 3001.0], [91.2, 3001.0], [91.3, 3001.0], [91.4, 3001.0], [91.5, 3002.0], [91.6, 3002.0], [91.7, 3002.0], [91.8, 3002.0], [91.9, 3002.0], [92.0, 3002.0], [92.1, 3002.0], [92.2, 3002.0], [92.3, 3002.0], [92.4, 3002.0], [92.5, 3002.0], [92.6, 3002.0], [92.7, 3002.0], [92.8, 3002.0], [92.9, 3003.0], [93.0, 3003.0], [93.1, 3003.0], [93.2, 3003.0], [93.3, 3003.0], [93.4, 3003.0], [93.5, 3003.0], [93.6, 3003.0], [93.7, 3003.0], [93.8, 3003.0], [93.9, 3003.0], [94.0, 3003.0], [94.1, 3003.0], [94.2, 3003.0], [94.3, 3003.0], [94.4, 3003.0], [94.5, 3003.0], [94.6, 3003.0], [94.7, 3003.0], [94.8, 3003.0], [94.9, 3003.0], [95.0, 3003.0], [95.1, 3003.0], [95.2, 3003.0], [95.3, 3003.0], [95.4, 3003.0], [95.5, 3003.0], [95.6, 3003.0], [95.7, 3003.0], [95.8, 3003.0], [95.9, 3003.0], [96.0, 3003.0], [96.1, 3003.0], [96.2, 3004.0], [96.3, 3004.0], [96.4, 3004.0], [96.5, 3004.0], [96.6, 3004.0], [96.7, 3004.0], [96.8, 3004.0], [96.9, 3004.0], [97.0, 3004.0], [97.1, 3004.0], [97.2, 3004.0], [97.3, 3004.0], [97.4, 3004.0], [97.5, 3004.0], [97.6, 3004.0], [97.7, 3004.0], [97.8, 3004.0], [97.9, 3004.0], [98.0, 3004.0], [98.1, 3005.0], [98.2, 3005.0], [98.3, 3005.0], [98.4, 3005.0], [98.5, 3006.0], [98.6, 3006.0], [98.7, 3006.0], [98.8, 3007.0], [98.9, 3008.0], [99.0, 3008.0], [99.1, 3009.0], [99.2, 3010.0], [99.3, 3012.0], [99.4, 3013.0], [99.5, 3017.0], [99.6, 3035.0], [99.7, 3622.0], [99.8, 4014.0], [99.9, 4027.0], [100.0, 4048.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9141.0, "series": [{"data": [[0.0, 9141.0], [600.0, 14.0], [700.0, 13.0], [800.0, 46.0], [900.0, 76.0], [1000.0, 78.0], [1100.0, 70.0], [1200.0, 72.0], [1300.0, 86.0], [1400.0, 97.0], [1500.0, 121.0], [1600.0, 145.0], [100.0, 526.0], [1700.0, 166.0], [1800.0, 183.0], [1900.0, 170.0], [2000.0, 131.0], [2100.0, 109.0], [2300.0, 62.0], [2200.0, 79.0], [2400.0, 59.0], [2500.0, 76.0], [2600.0, 62.0], [2700.0, 69.0], [2800.0, 48.0], [2900.0, 47.0], [3000.0, 1168.0], [3100.0, 2.0], [200.0, 86.0], [3500.0, 1.0], [3600.0, 2.0], [3900.0, 1.0], [4000.0, 37.0], [300.0, 38.0], [400.0, 49.0], [500.0, 13.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 570.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 9842.0, "series": [{"data": [[0.0, 9842.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 570.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 1537.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 1194.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.91856392294221, "minX": 1.64243124E12, "maxY": 204.7305983799325, "series": [{"data": [[1.6424313E12, 20.0], [1.64243142E12, 19.91856392294221], [1.64243124E12, 204.7305983799325], [1.64243136E12, 20.0]], "isOverall": false, "label": "ddos-servi\u00E7o-de-carrinho", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.0, "maxY": 3011.0, "series": [{"data": [[2.0, 1.0], [3.0, 2.0], [4.0, 2.0], [6.0, 0.5], [8.0, 1.0], [9.0, 3.0], [10.0, 1.0], [12.0, 3.0], [13.0, 1.0], [14.0, 11.0], [15.0, 2.0], [16.0, 4.0], [18.0, 3.0], [19.0, 3.0], [20.0, 41.56653759934788], [21.0, 3003.0], [22.0, 3003.0], [23.0, 3003.0], [24.0, 3003.5], [25.0, 3003.0], [26.0, 3004.0], [27.0, 1604.0], [28.0, 3004.0], [29.0, 1652.0], [30.0, 3003.0], [31.0, 3005.0], [33.0, 3002.0], [32.0, 3002.0], [35.0, 3001.0], [34.0, 3004.0], [36.0, 3003.0], [39.0, 3003.0], [38.0, 3003.5], [41.0, 3001.0], [40.0, 3004.0], [43.0, 1100.3333333333335], [42.0, 2067.0], [45.0, 3003.0], [44.0, 3003.0], [47.0, 3005.0], [46.0, 3003.0], [49.0, 3004.0], [48.0, 3003.0], [51.0, 3004.0], [50.0, 3002.0], [53.0, 3003.0], [52.0, 3001.5], [55.0, 3003.5], [57.0, 3004.0], [56.0, 1668.0], [59.0, 3002.0], [58.0, 3002.5], [61.0, 1551.5], [60.0, 3003.0], [63.0, 2501.0], [62.0, 1913.25], [67.0, 3002.0], [66.0, 1698.5], [65.0, 2493.0], [64.0, 3003.0], [71.0, 1353.5], [70.0, 2078.0], [69.0, 2292.0], [68.0, 1952.0], [75.0, 2093.0], [74.0, 2096.0], [73.0, 3003.0], [72.0, 3004.0], [78.0, 2007.0], [77.0, 2144.5], [83.0, 2196.0], [82.0, 3003.0], [81.0, 3004.0], [80.0, 3003.5], [87.0, 1881.0], [86.0, 1992.0], [85.0, 1752.0], [84.0, 2093.0], [91.0, 2193.0], [90.0, 1800.0], [89.0, 2590.0], [88.0, 3003.0], [95.0, 3003.0], [94.0, 3004.0], [93.0, 2043.0], [92.0, 2398.0], [99.0, 1691.0], [98.0, 3003.0], [97.0, 3004.0], [96.0, 1988.0], [103.0, 2651.5], [101.0, 2350.0], [105.0, 1051.0], [107.0, 2495.0], [106.0, 1898.0], [104.0, 2489.0], [111.0, 1912.0], [110.0, 2410.0], [108.0, 1894.0], [115.0, 1913.0], [114.0, 3002.0], [113.0, 3003.0], [112.0, 2013.0], [119.0, 2074.0], [118.0, 1897.0], [117.0, 1999.0], [116.0, 1805.0], [123.0, 2099.0], [121.0, 3010.0], [120.0, 3002.0], [127.0, 1895.0], [126.0, 3004.0], [125.0, 3005.0], [124.0, 1906.0], [131.0, 1353.5], [134.0, 3001.0], [133.0, 3004.0], [132.0, 3002.0], [130.0, 3002.0], [129.0, 2293.0], [128.0, 3001.0], [143.0, 2500.0], [142.0, 2513.0], [141.0, 1814.0], [140.0, 3003.0], [139.0, 3000.0], [138.0, 1990.0], [137.0, 2185.0], [136.0, 2498.0], [151.0, 2642.0], [150.0, 3004.0], [149.0, 3002.0], [148.0, 3003.0], [147.0, 1786.0], [146.0, 1801.0], [145.0, 2704.0], [144.0, 1909.0], [152.0, 1352.0], [159.0, 1999.0], [158.0, 1792.0], [157.0, 1899.0], [156.0, 1794.0], [155.0, 2002.0], [154.0, 1689.0], [153.0, 3003.0], [167.0, 1894.0], [165.0, 3003.0], [164.0, 2605.0], [163.0, 2400.0], [162.0, 3002.0], [161.0, 1884.0], [160.0, 1992.0], [175.0, 3001.0], [174.0, 1996.0], [173.0, 1905.0], [172.0, 3001.0], [171.0, 2092.0], [170.0, 1982.0], [169.0, 2079.0], [168.0, 2498.5], [183.0, 3004.0], [182.0, 3001.0], [181.0, 2099.0], [180.0, 1896.0], [179.0, 1897.0], [178.0, 2389.0], [177.0, 1944.5], [188.0, 1235.0], [191.0, 1996.0], [190.0, 1942.5], [189.0, 1894.0], [187.0, 1996.0], [186.0, 2002.0], [185.0, 2002.0], [184.0, 3001.5], [199.0, 1979.0], [198.0, 1942.5], [197.0, 1797.0], [196.0, 3003.0], [195.0, 3004.0], [194.0, 1994.0], [193.0, 3003.0], [192.0, 3002.0], [207.0, 1902.0], [206.0, 1896.0], [205.0, 1813.0], [204.0, 3005.0], [203.0, 3001.0], [202.0, 3003.0], [201.0, 3002.5], [215.0, 1900.0], [214.0, 1788.0], [213.0, 1791.0], [212.0, 3002.0], [211.0, 3003.0], [210.0, 3001.0], [209.0, 2000.0], [208.0, 3003.0], [216.0, 1398.0], [223.0, 1990.0], [222.0, 1897.0], [221.0, 2101.0], [219.0, 2139.0], [217.0, 1944.0], [231.0, 3008.0], [230.0, 3011.0], [227.0, 2000.0], [226.0, 2387.0], [225.0, 2101.0], [224.0, 1995.0], [239.0, 3003.0], [238.0, 2500.0], [237.0, 2505.0], [236.0, 3011.0], [235.0, 3002.0], [234.0, 2282.0], [233.0, 1899.0], [232.0, 3004.0], [247.0, 1795.0], [246.0, 1705.0], [245.0, 1891.0], [244.0, 1898.0], [243.0, 1809.0], [242.0, 3009.0], [241.0, 3003.0], [240.0, 3011.0], [250.0, 2287.788023317441], [252.0, 1854.1999999999998], [254.0, 2470.9], [255.0, 1993.2083333333337], [249.0, 2099.0], [248.0, 1894.0], [259.0, 2180.1111111111113], [256.0, 2772.0], [257.0, 2075.875], [258.0, 2205.25], [261.0, 2732.7857142857147], [260.0, 2093.0], [262.0, 3003.0], [263.0, 2158.0666666666666], [264.0, 3003.0], [265.0, 2063.785714285714], [267.0, 1666.8571428571427], [266.0, 2500.0], [269.0, 1778.181818181818], [268.0, 1992.0], [270.0, 2223.4905660377376], [1.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[77.15590047934273, 601.9378376321982]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 270.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.64243124E12, "maxY": 76105.61666666667, "series": [{"data": [[1.6424313E12, 15810.283333333333], [1.64243142E12, 10391.716666666667], [1.64243124E12, 76105.61666666667], [1.64243136E12, 16183.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6424313E12, 0.0], [1.64243142E12, 0.0], [1.64243124E12, 0.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 31.323555166374764, "minX": 1.64243124E12, "maxY": 1973.0705513456944, "series": [{"data": [[1.6424313E12, 45.064172661870636], [1.64243142E12, 31.323555166374764], [1.64243124E12, 1973.0705513456944], [1.64243136E12, 37.162496485802556]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 26.361646234675952, "minX": 1.64243124E12, "maxY": 1013.0616671021704, "series": [{"data": [[1.6424313E12, 36.83136690647475], [1.64243142E12, 26.361646234675952], [1.64243124E12, 1013.0616671021704], [1.64243136E12, 32.078436885015506]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64243124E12, "maxY": 4.9E-324, "series": [{"data": [[1.6424313E12, 0.0], [1.64243142E12, 0.0], [1.64243124E12, 0.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64243124E12, "maxY": 3960.0, "series": [{"data": [[1.6424313E12, 695.0], [1.64243142E12, 400.0], [1.64243124E12, 3960.0], [1.64243136E12, 703.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6424313E12, 1.0], [1.64243142E12, 0.0], [1.64243124E12, 1.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6424313E12, 1.0], [1.64243142E12, 0.0], [1.64243124E12, 1.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6424313E12, 1.0], [1.64243142E12, 0.0], [1.64243124E12, 1.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6424313E12, 0.0], [1.64243142E12, 0.0], [1.64243124E12, 0.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6424313E12, 6.0], [1.64243142E12, 4.0], [1.64243124E12, 1694.0], [1.64243136E12, 4.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 6.0, "maxY": 4014.0, "series": [{"data": [[6.0, 959.0], [18.0, 3087.0], [30.0, 2004.0], [33.0, 383.0], [35.0, 2166.0], [39.0, 197.0], [41.0, 103.5], [42.0, 195.0], [46.0, 95.0], [49.0, 90.0], [51.0, 7.0], [53.0, 7.0], [52.0, 8.0], [55.0, 7.0], [54.0, 7.0], [56.0, 6.0], [57.0, 5.0], [58.0, 6.0], [59.0, 5.0], [60.0, 4.0], [61.0, 4.0], [62.0, 4.0], [63.0, 3.0], [64.0, 2.0], [66.0, 3.0], [65.0, 3.0], [70.0, 1614.0], [69.0, 4.0], [82.0, 2000.0], [98.0, 1698.0], [96.0, 1897.0], [100.0, 2395.5], [104.0, 1602.0], [107.0, 1905.0], [105.0, 2005.5], [108.0, 2566.0], [110.0, 1796.0], [115.0, 1600.0], [117.0, 1703.5], [122.0, 2092.0], [123.0, 1883.0], [127.0, 1407.0], [126.0, 2185.0], [130.0, 2215.0], [135.0, 1699.0], [134.0, 1499.0], [139.0, 2760.5], [137.0, 2200.0], [140.0, 1002.0], [138.0, 1190.0], [160.0, 2634.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[58.0, 3003.0], [70.0, 3003.0], [82.0, 3003.5], [98.0, 3003.0], [96.0, 3003.0], [100.0, 4014.0], [104.0, 3003.0], [107.0, 3003.0], [105.0, 3003.0], [108.0, 3003.0], [110.0, 3003.0], [115.0, 3003.0], [117.0, 3003.0], [122.0, 3003.0], [123.0, 3003.0], [127.0, 3004.0], [126.0, 3004.0], [130.0, 3004.0], [135.0, 3003.0], [134.0, 3003.5], [139.0, 3003.0], [137.0, 3003.0], [140.0, 3003.0], [138.0, 3003.0], [160.0, 3003.0], [18.0, 3003.5], [30.0, 3003.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 160.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 6.0, "maxY": 3087.0, "series": [{"data": [[6.0, 908.0], [18.0, 3087.0], [30.0, 2004.0], [33.0, 96.0], [35.0, 2159.0], [39.0, 93.0], [41.0, 100.0], [42.0, 95.5], [46.0, 94.5], [49.0, 88.0], [51.0, 6.0], [53.0, 6.0], [52.0, 6.0], [55.0, 5.0], [54.0, 6.0], [56.0, 4.5], [57.0, 4.5], [58.0, 5.0], [59.0, 4.0], [60.0, 4.0], [61.0, 4.0], [62.0, 3.0], [63.0, 3.0], [64.0, 2.0], [66.0, 2.0], [65.0, 3.0], [70.0, 1614.0], [69.0, 4.0], [82.0, 1993.0], [98.0, 1690.0], [96.0, 1894.0], [100.0, 2395.5], [104.0, 1597.5], [107.0, 1902.0], [105.0, 1990.0], [108.0, 2565.5], [110.0, 1796.0], [115.0, 1594.0], [117.0, 1693.5], [122.0, 2017.5], [123.0, 1817.0], [127.0, 1405.0], [126.0, 2185.0], [130.0, 2195.0], [135.0, 1697.0], [134.0, 1495.5], [139.0, 2742.5], [137.0, 2198.0], [140.0, 999.0], [138.0, 1116.0], [160.0, 2632.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[58.0, 0.0], [70.0, 0.0], [82.0, 0.0], [98.0, 0.0], [96.0, 0.0], [100.0, 0.0], [104.0, 0.0], [107.0, 0.0], [105.0, 0.0], [108.0, 0.0], [110.0, 0.0], [115.0, 0.0], [117.0, 0.0], [122.0, 0.0], [123.0, 0.0], [127.0, 0.0], [126.0, 0.0], [130.0, 0.0], [135.0, 0.0], [134.0, 0.0], [139.0, 0.0], [137.0, 0.0], [140.0, 0.0], [138.0, 0.0], [160.0, 0.0], [18.0, 0.0], [30.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 160.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 38.016666666666666, "minX": 1.64243124E12, "maxY": 63.8, "series": [{"data": [[1.6424313E12, 57.93333333333333], [1.64243142E12, 38.016666666666666], [1.64243124E12, 63.8], [1.64243136E12, 59.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.9, "minX": 1.64243124E12, "maxY": 59.28333333333333, "series": [{"data": [[1.6424313E12, 57.916666666666664], [1.64243142E12, 38.06666666666667], [1.64243124E12, 43.88333333333333], [1.64243136E12, 59.28333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64243124E12, 19.9]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.9, "minX": 1.64243124E12, "maxY": 59.28333333333333, "series": [{"data": [[1.64243124E12, 19.9]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-failure", "isController": false}, {"data": [[1.6424313E12, 57.916666666666664], [1.64243142E12, 38.06666666666667], [1.64243124E12, 43.88333333333333], [1.64243136E12, 59.28333333333333]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.9, "minX": 1.64243124E12, "maxY": 59.28333333333333, "series": [{"data": [[1.6424313E12, 57.916666666666664], [1.64243142E12, 38.06666666666667], [1.64243124E12, 43.88333333333333], [1.64243136E12, 59.28333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64243124E12, 19.9]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Total Transactions Per Second"}},
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

