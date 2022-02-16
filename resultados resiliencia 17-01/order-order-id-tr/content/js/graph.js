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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 8404.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 5.0], [6.8, 5.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 14.0], [16.8, 14.0], [16.9, 14.0], [17.0, 14.0], [17.1, 14.0], [17.2, 14.0], [17.3, 15.0], [17.4, 15.0], [17.5, 15.0], [17.6, 15.0], [17.7, 15.0], [17.8, 16.0], [17.9, 16.0], [18.0, 16.0], [18.1, 16.0], [18.2, 17.0], [18.3, 17.0], [18.4, 18.0], [18.5, 18.0], [18.6, 19.0], [18.7, 20.0], [18.8, 23.0], [18.9, 80.0], [19.0, 83.0], [19.1, 84.0], [19.2, 85.0], [19.3, 85.0], [19.4, 85.0], [19.5, 86.0], [19.6, 86.0], [19.7, 86.0], [19.8, 86.0], [19.9, 87.0], [20.0, 87.0], [20.1, 87.0], [20.2, 87.0], [20.3, 87.0], [20.4, 88.0], [20.5, 88.0], [20.6, 88.0], [20.7, 88.0], [20.8, 88.0], [20.9, 88.0], [21.0, 89.0], [21.1, 89.0], [21.2, 89.0], [21.3, 89.0], [21.4, 89.0], [21.5, 89.0], [21.6, 89.0], [21.7, 89.0], [21.8, 89.0], [21.9, 90.0], [22.0, 90.0], [22.1, 90.0], [22.2, 90.0], [22.3, 90.0], [22.4, 90.0], [22.5, 90.0], [22.6, 90.0], [22.7, 90.0], [22.8, 90.0], [22.9, 90.0], [23.0, 91.0], [23.1, 91.0], [23.2, 91.0], [23.3, 91.0], [23.4, 91.0], [23.5, 91.0], [23.6, 91.0], [23.7, 91.0], [23.8, 91.0], [23.9, 91.0], [24.0, 91.0], [24.1, 92.0], [24.2, 92.0], [24.3, 92.0], [24.4, 92.0], [24.5, 92.0], [24.6, 92.0], [24.7, 92.0], [24.8, 92.0], [24.9, 92.0], [25.0, 92.0], [25.1, 92.0], [25.2, 92.0], [25.3, 92.0], [25.4, 92.0], [25.5, 93.0], [25.6, 93.0], [25.7, 93.0], [25.8, 93.0], [25.9, 93.0], [26.0, 93.0], [26.1, 93.0], [26.2, 93.0], [26.3, 93.0], [26.4, 93.0], [26.5, 93.0], [26.6, 93.0], [26.7, 93.0], [26.8, 93.0], [26.9, 94.0], [27.0, 94.0], [27.1, 94.0], [27.2, 94.0], [27.3, 94.0], [27.4, 94.0], [27.5, 94.0], [27.6, 94.0], [27.7, 94.0], [27.8, 94.0], [27.9, 94.0], [28.0, 94.0], [28.1, 94.0], [28.2, 94.0], [28.3, 94.0], [28.4, 95.0], [28.5, 95.0], [28.6, 95.0], [28.7, 95.0], [28.8, 95.0], [28.9, 95.0], [29.0, 95.0], [29.1, 95.0], [29.2, 95.0], [29.3, 95.0], [29.4, 95.0], [29.5, 95.0], [29.6, 95.0], [29.7, 95.0], [29.8, 95.0], [29.9, 95.0], [30.0, 95.0], [30.1, 95.0], [30.2, 96.0], [30.3, 96.0], [30.4, 96.0], [30.5, 96.0], [30.6, 96.0], [30.7, 96.0], [30.8, 96.0], [30.9, 96.0], [31.0, 96.0], [31.1, 96.0], [31.2, 96.0], [31.3, 96.0], [31.4, 96.0], [31.5, 96.0], [31.6, 96.0], [31.7, 96.0], [31.8, 96.0], [31.9, 96.0], [32.0, 97.0], [32.1, 97.0], [32.2, 97.0], [32.3, 97.0], [32.4, 97.0], [32.5, 97.0], [32.6, 97.0], [32.7, 97.0], [32.8, 97.0], [32.9, 97.0], [33.0, 97.0], [33.1, 97.0], [33.2, 97.0], [33.3, 97.0], [33.4, 97.0], [33.5, 97.0], [33.6, 97.0], [33.7, 97.0], [33.8, 97.0], [33.9, 98.0], [34.0, 98.0], [34.1, 98.0], [34.2, 98.0], [34.3, 98.0], [34.4, 98.0], [34.5, 98.0], [34.6, 98.0], [34.7, 98.0], [34.8, 98.0], [34.9, 98.0], [35.0, 98.0], [35.1, 98.0], [35.2, 98.0], [35.3, 98.0], [35.4, 98.0], [35.5, 98.0], [35.6, 98.0], [35.7, 98.0], [35.8, 98.0], [35.9, 98.0], [36.0, 99.0], [36.1, 99.0], [36.2, 99.0], [36.3, 99.0], [36.4, 99.0], [36.5, 99.0], [36.6, 99.0], [36.7, 99.0], [36.8, 99.0], [36.9, 99.0], [37.0, 99.0], [37.1, 99.0], [37.2, 99.0], [37.3, 99.0], [37.4, 99.0], [37.5, 99.0], [37.6, 99.0], [37.7, 99.0], [37.8, 99.0], [37.9, 99.0], [38.0, 99.0], [38.1, 99.0], [38.2, 100.0], [38.3, 100.0], [38.4, 100.0], [38.5, 100.0], [38.6, 100.0], [38.7, 100.0], [38.8, 100.0], [38.9, 100.0], [39.0, 100.0], [39.1, 100.0], [39.2, 100.0], [39.3, 100.0], [39.4, 100.0], [39.5, 100.0], [39.6, 100.0], [39.7, 100.0], [39.8, 100.0], [39.9, 100.0], [40.0, 100.0], [40.1, 100.0], [40.2, 101.0], [40.3, 101.0], [40.4, 101.0], [40.5, 101.0], [40.6, 101.0], [40.7, 101.0], [40.8, 101.0], [40.9, 101.0], [41.0, 101.0], [41.1, 101.0], [41.2, 101.0], [41.3, 101.0], [41.4, 101.0], [41.5, 101.0], [41.6, 101.0], [41.7, 101.0], [41.8, 101.0], [41.9, 101.0], [42.0, 101.0], [42.1, 101.0], [42.2, 101.0], [42.3, 101.0], [42.4, 102.0], [42.5, 102.0], [42.6, 102.0], [42.7, 102.0], [42.8, 102.0], [42.9, 102.0], [43.0, 102.0], [43.1, 102.0], [43.2, 102.0], [43.3, 102.0], [43.4, 102.0], [43.5, 102.0], [43.6, 102.0], [43.7, 102.0], [43.8, 102.0], [43.9, 102.0], [44.0, 102.0], [44.1, 102.0], [44.2, 102.0], [44.3, 103.0], [44.4, 103.0], [44.5, 103.0], [44.6, 103.0], [44.7, 103.0], [44.8, 103.0], [44.9, 103.0], [45.0, 103.0], [45.1, 103.0], [45.2, 103.0], [45.3, 103.0], [45.4, 103.0], [45.5, 103.0], [45.6, 103.0], [45.7, 103.0], [45.8, 103.0], [45.9, 103.0], [46.0, 103.0], [46.1, 103.0], [46.2, 104.0], [46.3, 104.0], [46.4, 104.0], [46.5, 104.0], [46.6, 104.0], [46.7, 104.0], [46.8, 104.0], [46.9, 104.0], [47.0, 104.0], [47.1, 104.0], [47.2, 104.0], [47.3, 104.0], [47.4, 104.0], [47.5, 104.0], [47.6, 104.0], [47.7, 104.0], [47.8, 105.0], [47.9, 105.0], [48.0, 105.0], [48.1, 105.0], [48.2, 105.0], [48.3, 105.0], [48.4, 105.0], [48.5, 105.0], [48.6, 105.0], [48.7, 105.0], [48.8, 105.0], [48.9, 105.0], [49.0, 105.0], [49.1, 105.0], [49.2, 105.0], [49.3, 106.0], [49.4, 106.0], [49.5, 106.0], [49.6, 106.0], [49.7, 106.0], [49.8, 106.0], [49.9, 106.0], [50.0, 106.0], [50.1, 106.0], [50.2, 106.0], [50.3, 106.0], [50.4, 106.0], [50.5, 106.0], [50.6, 106.0], [50.7, 106.0], [50.8, 107.0], [50.9, 107.0], [51.0, 107.0], [51.1, 107.0], [51.2, 107.0], [51.3, 107.0], [51.4, 107.0], [51.5, 107.0], [51.6, 107.0], [51.7, 107.0], [51.8, 107.0], [51.9, 107.0], [52.0, 108.0], [52.1, 108.0], [52.2, 108.0], [52.3, 108.0], [52.4, 108.0], [52.5, 108.0], [52.6, 108.0], [52.7, 108.0], [52.8, 108.0], [52.9, 108.0], [53.0, 109.0], [53.1, 109.0], [53.2, 109.0], [53.3, 109.0], [53.4, 109.0], [53.5, 109.0], [53.6, 109.0], [53.7, 109.0], [53.8, 109.0], [53.9, 110.0], [54.0, 110.0], [54.1, 110.0], [54.2, 110.0], [54.3, 110.0], [54.4, 110.0], [54.5, 110.0], [54.6, 111.0], [54.7, 111.0], [54.8, 111.0], [54.9, 111.0], [55.0, 111.0], [55.1, 111.0], [55.2, 111.0], [55.3, 112.0], [55.4, 112.0], [55.5, 112.0], [55.6, 112.0], [55.7, 112.0], [55.8, 113.0], [55.9, 113.0], [56.0, 113.0], [56.1, 113.0], [56.2, 114.0], [56.3, 114.0], [56.4, 114.0], [56.5, 115.0], [56.6, 115.0], [56.7, 116.0], [56.8, 116.0], [56.9, 117.0], [57.0, 118.0], [57.1, 122.0], [57.2, 177.0], [57.3, 180.0], [57.4, 181.0], [57.5, 181.0], [57.6, 182.0], [57.7, 182.0], [57.8, 183.0], [57.9, 183.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 184.0], [58.4, 185.0], [58.5, 185.0], [58.6, 185.0], [58.7, 185.0], [58.8, 185.0], [58.9, 186.0], [59.0, 186.0], [59.1, 186.0], [59.2, 186.0], [59.3, 186.0], [59.4, 186.0], [59.5, 187.0], [59.6, 187.0], [59.7, 187.0], [59.8, 187.0], [59.9, 187.0], [60.0, 187.0], [60.1, 187.0], [60.2, 188.0], [60.3, 188.0], [60.4, 188.0], [60.5, 188.0], [60.6, 188.0], [60.7, 188.0], [60.8, 188.0], [60.9, 188.0], [61.0, 189.0], [61.1, 189.0], [61.2, 189.0], [61.3, 189.0], [61.4, 189.0], [61.5, 189.0], [61.6, 189.0], [61.7, 189.0], [61.8, 190.0], [61.9, 190.0], [62.0, 190.0], [62.1, 190.0], [62.2, 190.0], [62.3, 190.0], [62.4, 190.0], [62.5, 190.0], [62.6, 190.0], [62.7, 191.0], [62.8, 191.0], [62.9, 191.0], [63.0, 191.0], [63.1, 191.0], [63.2, 191.0], [63.3, 191.0], [63.4, 191.0], [63.5, 191.0], [63.6, 191.0], [63.7, 192.0], [63.8, 192.0], [63.9, 192.0], [64.0, 192.0], [64.1, 192.0], [64.2, 192.0], [64.3, 192.0], [64.4, 192.0], [64.5, 192.0], [64.6, 192.0], [64.7, 193.0], [64.8, 193.0], [64.9, 193.0], [65.0, 193.0], [65.1, 193.0], [65.2, 193.0], [65.3, 193.0], [65.4, 193.0], [65.5, 193.0], [65.6, 193.0], [65.7, 193.0], [65.8, 194.0], [65.9, 194.0], [66.0, 194.0], [66.1, 194.0], [66.2, 194.0], [66.3, 194.0], [66.4, 194.0], [66.5, 194.0], [66.6, 194.0], [66.7, 194.0], [66.8, 194.0], [66.9, 195.0], [67.0, 195.0], [67.1, 195.0], [67.2, 195.0], [67.3, 195.0], [67.4, 195.0], [67.5, 195.0], [67.6, 195.0], [67.7, 195.0], [67.8, 195.0], [67.9, 195.0], [68.0, 196.0], [68.1, 196.0], [68.2, 196.0], [68.3, 196.0], [68.4, 196.0], [68.5, 196.0], [68.6, 196.0], [68.7, 196.0], [68.8, 196.0], [68.9, 196.0], [69.0, 196.0], [69.1, 197.0], [69.2, 197.0], [69.3, 197.0], [69.4, 197.0], [69.5, 197.0], [69.6, 197.0], [69.7, 197.0], [69.8, 197.0], [69.9, 197.0], [70.0, 197.0], [70.1, 197.0], [70.2, 197.0], [70.3, 198.0], [70.4, 198.0], [70.5, 198.0], [70.6, 198.0], [70.7, 198.0], [70.8, 198.0], [70.9, 198.0], [71.0, 198.0], [71.1, 198.0], [71.2, 198.0], [71.3, 198.0], [71.4, 199.0], [71.5, 199.0], [71.6, 199.0], [71.7, 199.0], [71.8, 199.0], [71.9, 199.0], [72.0, 199.0], [72.1, 199.0], [72.2, 199.0], [72.3, 199.0], [72.4, 199.0], [72.5, 200.0], [72.6, 200.0], [72.7, 200.0], [72.8, 200.0], [72.9, 200.0], [73.0, 200.0], [73.1, 200.0], [73.2, 200.0], [73.3, 200.0], [73.4, 200.0], [73.5, 200.0], [73.6, 200.0], [73.7, 201.0], [73.8, 201.0], [73.9, 201.0], [74.0, 201.0], [74.1, 201.0], [74.2, 201.0], [74.3, 201.0], [74.4, 201.0], [74.5, 201.0], [74.6, 202.0], [74.7, 202.0], [74.8, 202.0], [74.9, 202.0], [75.0, 202.0], [75.1, 202.0], [75.2, 202.0], [75.3, 202.0], [75.4, 203.0], [75.5, 203.0], [75.6, 203.0], [75.7, 203.0], [75.8, 203.0], [75.9, 203.0], [76.0, 203.0], [76.1, 203.0], [76.2, 203.0], [76.3, 204.0], [76.4, 204.0], [76.5, 204.0], [76.6, 204.0], [76.7, 204.0], [76.8, 204.0], [76.9, 204.0], [77.0, 205.0], [77.1, 205.0], [77.2, 205.0], [77.3, 205.0], [77.4, 205.0], [77.5, 205.0], [77.6, 206.0], [77.7, 206.0], [77.8, 206.0], [77.9, 206.0], [78.0, 206.0], [78.1, 206.0], [78.2, 207.0], [78.3, 207.0], [78.4, 207.0], [78.5, 207.0], [78.6, 208.0], [78.7, 208.0], [78.8, 208.0], [78.9, 208.0], [79.0, 208.0], [79.1, 209.0], [79.2, 209.0], [79.3, 209.0], [79.4, 210.0], [79.5, 210.0], [79.6, 210.0], [79.7, 211.0], [79.8, 211.0], [79.9, 211.0], [80.0, 212.0], [80.1, 212.0], [80.2, 213.0], [80.3, 214.0], [80.4, 215.0], [80.5, 216.0], [80.6, 220.0], [80.7, 278.0], [80.8, 281.0], [80.9, 282.0], [81.0, 283.0], [81.1, 284.0], [81.2, 284.0], [81.3, 285.0], [81.4, 285.0], [81.5, 286.0], [81.6, 286.0], [81.7, 286.0], [81.8, 287.0], [81.9, 287.0], [82.0, 287.0], [82.1, 288.0], [82.2, 288.0], [82.3, 288.0], [82.4, 289.0], [82.5, 289.0], [82.6, 289.0], [82.7, 289.0], [82.8, 290.0], [82.9, 290.0], [83.0, 290.0], [83.1, 290.0], [83.2, 291.0], [83.3, 291.0], [83.4, 291.0], [83.5, 291.0], [83.6, 292.0], [83.7, 292.0], [83.8, 292.0], [83.9, 292.0], [84.0, 293.0], [84.1, 293.0], [84.2, 293.0], [84.3, 293.0], [84.4, 294.0], [84.5, 294.0], [84.6, 294.0], [84.7, 294.0], [84.8, 295.0], [84.9, 295.0], [85.0, 295.0], [85.1, 295.0], [85.2, 296.0], [85.3, 296.0], [85.4, 296.0], [85.5, 296.0], [85.6, 296.0], [85.7, 297.0], [85.8, 297.0], [85.9, 297.0], [86.0, 297.0], [86.1, 298.0], [86.2, 298.0], [86.3, 298.0], [86.4, 298.0], [86.5, 298.0], [86.6, 299.0], [86.7, 299.0], [86.8, 299.0], [86.9, 300.0], [87.0, 300.0], [87.1, 300.0], [87.2, 300.0], [87.3, 301.0], [87.4, 301.0], [87.5, 301.0], [87.6, 301.0], [87.7, 302.0], [87.8, 302.0], [87.9, 302.0], [88.0, 303.0], [88.1, 303.0], [88.2, 303.0], [88.3, 304.0], [88.4, 304.0], [88.5, 305.0], [88.6, 305.0], [88.7, 305.0], [88.8, 306.0], [88.9, 306.0], [89.0, 307.0], [89.1, 307.0], [89.2, 308.0], [89.3, 309.0], [89.4, 310.0], [89.5, 310.0], [89.6, 311.0], [89.7, 313.0], [89.8, 314.0], [89.9, 321.0], [90.0, 380.0], [90.1, 383.0], [90.2, 385.0], [90.3, 385.0], [90.4, 386.0], [90.5, 387.0], [90.6, 388.0], [90.7, 389.0], [90.8, 389.0], [90.9, 390.0], [91.0, 391.0], [91.1, 391.0], [91.2, 392.0], [91.3, 393.0], [91.4, 393.0], [91.5, 394.0], [91.6, 394.0], [91.7, 395.0], [91.8, 396.0], [91.9, 396.0], [92.0, 397.0], [92.1, 397.0], [92.2, 398.0], [92.3, 398.0], [92.4, 399.0], [92.5, 399.0], [92.6, 400.0], [92.7, 401.0], [92.8, 401.0], [92.9, 402.0], [93.0, 403.0], [93.1, 404.0], [93.2, 405.0], [93.3, 406.0], [93.4, 408.0], [93.5, 409.0], [93.6, 412.0], [93.7, 416.0], [93.8, 480.0], [93.9, 485.0], [94.0, 487.0], [94.1, 488.0], [94.2, 490.0], [94.3, 492.0], [94.4, 493.0], [94.5, 494.0], [94.6, 496.0], [94.7, 497.0], [94.8, 498.0], [94.9, 500.0], [95.0, 501.0], [95.1, 503.0], [95.2, 505.0], [95.3, 507.0], [95.4, 511.0], [95.5, 518.0], [95.6, 585.0], [95.7, 589.0], [95.8, 592.0], [95.9, 595.0], [96.0, 597.0], [96.1, 599.0], [96.2, 601.0], [96.3, 605.0], [96.4, 612.0], [96.5, 681.0], [96.6, 690.0], [96.7, 695.0], [96.8, 700.0], [96.9, 705.0], [97.0, 729.0], [97.1, 788.0], [97.2, 796.0], [97.3, 802.0], [97.4, 813.0], [97.5, 891.0], [97.6, 897.0], [97.7, 906.0], [97.8, 984.0], [97.9, 997.0], [98.0, 1009.0], [98.1, 1092.0], [98.2, 1102.0], [98.3, 1187.0], [98.4, 1201.0], [98.5, 1286.0], [98.6, 1302.0], [98.7, 1393.0], [98.8, 1405.0], [98.9, 1495.0], [99.0, 1515.0], [99.1, 1605.0], [99.2, 1702.0], [99.3, 1803.0], [99.4, 1903.0], [99.5, 2093.0], [99.6, 2215.0], [99.7, 2581.0], [99.8, 2885.0], [99.9, 3413.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 23191.0, "series": [{"data": [[0.0, 23191.0], [600.0, 410.0], [700.0, 285.0], [800.0, 221.0], [900.0, 188.0], [1000.0, 149.0], [1100.0, 132.0], [1200.0, 122.0], [1300.0, 97.0], [1400.0, 108.0], [1500.0, 90.0], [1600.0, 68.0], [1700.0, 61.0], [1800.0, 56.0], [1900.0, 49.0], [2000.0, 37.0], [2100.0, 34.0], [2200.0, 33.0], [2300.0, 22.0], [2400.0, 16.0], [2500.0, 17.0], [2600.0, 23.0], [2700.0, 13.0], [2800.0, 18.0], [2900.0, 9.0], [3000.0, 10.0], [3100.0, 13.0], [3200.0, 13.0], [3300.0, 5.0], [3400.0, 13.0], [3500.0, 4.0], [3700.0, 6.0], [3600.0, 5.0], [3800.0, 5.0], [3900.0, 2.0], [4000.0, 5.0], [4300.0, 2.0], [4100.0, 2.0], [4200.0, 3.0], [4600.0, 2.0], [4500.0, 1.0], [4400.0, 2.0], [4700.0, 2.0], [5000.0, 1.0], [5700.0, 2.0], [7400.0, 2.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [8000.0, 1.0], [8200.0, 1.0], [8400.0, 1.0], [100.0, 20899.0], [200.0, 8779.0], [300.0, 3413.0], [400.0, 1457.0], [500.0, 741.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 57777.0, "series": [{"data": [[0.0, 57777.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2419.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 647.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 149.18282977155496, "minX": 1.64243124E12, "maxY": 150.0, "series": [{"data": [[1.6424313E12, 150.0], [1.64243142E12, 149.18282977155496], [1.64243124E12, 150.0], [1.64243136E12, 150.0]], "isOverall": false, "label": "ddos carts-id", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "maxY": 299.0, "series": [{"data": [[2.0, 185.0], [5.0, 299.0], [7.0, 217.75], [10.0, 259.25], [12.0, 185.5], [19.0, 100.0], [20.0, 104.0], [22.0, 177.42857142857144], [23.0, 210.0], [25.0, 153.5], [26.0, 110.0], [27.0, 103.5], [28.0, 95.0], [30.0, 140.0], [32.0, 187.5], [35.0, 188.5], [34.0, 91.0], [37.0, 8.0], [36.0, 190.0], [39.0, 9.0], [38.0, 8.0], [41.0, 11.0], [40.0, 9.0], [43.0, 15.0], [42.0, 101.0], [45.0, 113.0], [44.0, 7.0], [46.0, 7.0], [48.0, 58.5], [51.0, 111.0], [50.0, 104.0], [53.0, 93.0], [52.0, 109.0], [55.0, 106.5], [57.0, 153.5], [59.0, 99.0], [58.0, 197.0], [60.0, 2.0], [63.0, 1.0], [62.0, 99.0], [67.0, 145.5], [66.0, 146.5], [70.0, 126.66666666666666], [75.0, 97.0], [74.0, 97.0], [73.0, 129.33333333333334], [78.0, 87.0], [77.0, 142.0], [83.0, 9.0], [82.0, 4.0], [81.0, 135.0], [80.0, 89.0], [86.0, 106.0], [85.0, 2.0], [91.0, 58.5], [89.0, 4.0], [88.0, 37.33333333333333], [95.0, 98.0], [94.0, 4.0], [93.0, 101.0], [92.0, 103.0], [97.0, 102.0], [96.0, 4.0], [103.0, 52.5], [101.0, 53.5], [100.0, 98.0], [106.0, 96.0], [105.0, 100.0], [104.0, 7.0], [111.0, 89.5], [109.0, 92.0], [108.0, 93.0], [115.0, 12.5], [113.0, 10.0], [112.0, 92.0], [119.0, 6.0], [116.0, 4.0], [123.0, 10.0], [121.0, 11.0], [127.0, 11.0], [126.0, 9.0], [124.0, 9.0], [135.0, 3.0], [134.0, 3.0], [133.0, 5.5], [132.0, 8.0], [131.0, 6.0], [129.0, 4.666666666666667], [128.0, 5.0], [143.0, 91.5], [142.0, 87.0], [140.0, 89.0], [139.0, 51.0], [137.0, 1.0], [150.0, 192.00532370780502], [149.0, 3.0909090909090913], [147.0, 5.5], [146.0, 5.4], [145.0, 7.0], [144.0, 90.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[149.81774702517924, 191.6834856353946]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.64243124E12, "maxY": 100718.15, "series": [{"data": [[1.6424313E12, 98400.9], [1.64243142E12, 67623.83333333333], [1.64243124E12, 36513.683333333334], [1.64243136E12, 100718.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6424313E12, 0.0], [1.64243142E12, 0.0], [1.64243124E12, 0.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135.3628592483426, "minX": 1.64243124E12, "maxY": 521.6337296706286, "series": [{"data": [[1.6424313E12, 155.9243391066528], [1.64243142E12, 135.3628592483426], [1.64243124E12, 521.6337296706286], [1.64243136E12, 144.98243530750744]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 128.92719233603546, "minX": 1.64243124E12, "maxY": 511.5599289326236, "series": [{"data": [[1.6424313E12, 148.63086194672377], [1.64243142E12, 128.92719233603546], [1.64243124E12, 511.5599289326236], [1.64243136E12, 137.77863539656667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64243124E12, "maxY": 8404.0, "series": [{"data": [[1.6424313E12, 1511.0], [1.64243142E12, 1103.0], [1.64243124E12, 8404.0], [1.64243136E12, 1881.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6424313E12, 1.0], [1.64243142E12, 1.0], [1.64243124E12, 2.0], [1.64243136E12, 1.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6424313E12, 1.0], [1.64243142E12, 1.0], [1.64243124E12, 2.0], [1.64243136E12, 1.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6424313E12, 1.0], [1.64243142E12, 1.0], [1.64243124E12, 2.0], [1.64243136E12, 1.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6424313E12, 0.0], [1.64243142E12, 0.0], [1.64243124E12, 1.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6424313E12, 106.0], [1.64243142E12, 102.0], [1.64243124E12, 203.0], [1.64243136E12, 104.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 60.0, "maxY": 5047.0, "series": [{"data": [[60.0, 1495.5], [65.0, 906.0], [64.0, 1210.0], [74.0, 891.5], [77.0, 814.0], [89.0, 1584.0], [90.0, 1495.0], [88.0, 693.0], [95.0, 604.0], [100.0, 1201.5], [111.0, 1105.0], [113.0, 1482.0], [114.0, 800.5], [112.0, 987.0], [118.0, 911.0], [117.0, 910.0], [124.0, 809.5], [125.0, 778.0], [132.0, 798.5], [133.0, 98.0], [138.0, 611.5], [139.0, 797.0], [143.0, 812.0], [148.0, 795.5], [246.0, 291.0], [271.0, 207.0], [260.0, 189.0], [274.0, 200.5], [273.0, 197.0], [278.0, 209.0], [302.0, 186.0], [292.0, 119.0], [296.0, 111.0], [294.0, 188.5], [289.0, 106.0], [297.0, 206.0], [303.0, 192.0], [290.0, 183.0], [300.0, 193.5], [319.0, 111.0], [313.0, 186.0], [310.0, 113.0], [309.0, 105.0], [318.0, 185.0], [315.0, 112.5], [305.0, 120.0], [304.0, 187.5], [316.0, 105.0], [307.0, 187.0], [333.0, 109.0], [326.0, 116.0], [325.0, 107.0], [324.0, 188.0], [334.0, 106.0], [328.0, 104.0], [335.0, 104.0], [323.0, 106.5], [329.0, 108.0], [327.0, 105.0], [322.0, 105.5], [321.0, 106.0], [320.0, 151.5], [330.0, 105.0], [331.0, 105.0], [332.0, 100.0], [339.0, 109.0], [336.0, 104.0], [347.0, 107.0], [343.0, 103.0], [342.0, 106.0], [341.0, 102.0], [340.0, 105.0], [338.0, 106.0], [337.0, 106.5], [346.0, 105.0], [350.0, 103.0], [348.0, 101.0], [349.0, 104.0], [345.0, 103.0], [344.0, 103.0], [351.0, 103.0], [353.0, 102.0], [364.0, 98.0], [365.0, 99.0], [367.0, 100.0], [356.0, 102.0], [358.0, 103.0], [360.0, 100.0], [363.0, 99.0], [362.0, 98.5], [361.0, 96.0], [355.0, 100.0], [354.0, 99.0], [352.0, 102.0], [359.0, 100.0], [357.0, 99.0], [380.0, 100.0], [391.0, 95.0], [429.0, 91.0], [456.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[90.0, 5047.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 456.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 60.0, "maxY": 1584.0, "series": [{"data": [[60.0, 1495.5], [65.0, 902.0], [64.0, 1197.0], [74.0, 891.0], [77.0, 804.0], [89.0, 1584.0], [90.0, 1493.0], [88.0, 687.5], [95.0, 602.0], [100.0, 1200.5], [111.0, 1105.0], [113.0, 1480.0], [114.0, 799.0], [112.0, 984.0], [118.0, 907.5], [117.0, 910.0], [124.0, 807.0], [125.0, 778.0], [132.0, 798.5], [133.0, 97.0], [138.0, 609.0], [139.0, 791.0], [143.0, 804.0], [148.0, 795.0], [246.0, 204.0], [271.0, 202.0], [260.0, 115.0], [274.0, 198.0], [273.0, 192.0], [278.0, 199.0], [302.0, 112.5], [292.0, 115.5], [296.0, 108.0], [294.0, 183.5], [289.0, 102.0], [297.0, 199.0], [303.0, 188.0], [290.0, 109.0], [300.0, 189.5], [319.0, 107.0], [313.0, 122.0], [310.0, 110.0], [309.0, 104.0], [318.0, 109.0], [315.0, 108.0], [305.0, 114.0], [304.0, 178.0], [316.0, 104.0], [307.0, 106.0], [333.0, 106.0], [326.0, 109.0], [325.0, 105.0], [324.0, 111.5], [334.0, 105.0], [328.0, 103.0], [335.0, 103.0], [323.0, 104.0], [329.0, 105.0], [327.0, 104.0], [322.0, 104.0], [321.0, 105.0], [320.0, 112.0], [330.0, 104.0], [331.0, 104.0], [332.0, 99.0], [339.0, 107.0], [336.0, 103.0], [347.0, 105.0], [343.0, 102.0], [342.0, 104.0], [341.0, 101.0], [340.0, 104.0], [338.0, 104.0], [337.0, 105.0], [346.0, 103.0], [350.0, 102.0], [348.0, 100.0], [349.0, 103.0], [345.0, 102.0], [344.0, 102.0], [351.0, 102.0], [353.0, 101.5], [364.0, 96.0], [365.0, 99.0], [367.0, 99.5], [356.0, 101.0], [358.0, 101.0], [360.0, 99.0], [363.0, 98.0], [362.0, 98.0], [361.0, 96.0], [355.0, 99.0], [354.0, 99.0], [352.0, 101.0], [359.0, 100.0], [357.0, 99.0], [380.0, 99.0], [391.0, 95.0], [429.0, 88.0], [456.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[90.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 456.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 122.9, "minX": 1.64243124E12, "maxY": 336.8333333333333, "series": [{"data": [[1.6424313E12, 328.9166666666667], [1.64243142E12, 225.41666666666666], [1.64243124E12, 122.9], [1.64243136E12, 336.8333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64243124E12, "maxY": 336.85, "series": [{"data": [[1.6424313E12, 329.1], [1.64243142E12, 226.16666666666666], [1.64243124E12, 121.93333333333334], [1.64243136E12, 336.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64243124E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64243124E12, "maxY": 336.85, "series": [{"data": [[1.64243124E12, 0.016666666666666666]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-failure", "isController": false}, {"data": [[1.6424313E12, 329.1], [1.64243142E12, 226.16666666666666], [1.64243124E12, 121.93333333333334], [1.64243136E12, 336.85]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64243124E12, "maxY": 336.85, "series": [{"data": [[1.6424313E12, 329.1], [1.64243142E12, 226.16666666666666], [1.64243124E12, 121.93333333333334], [1.64243136E12, 336.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64243124E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Total Transactions Per Second"}},
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

