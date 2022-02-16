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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 15697.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 3.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 10.0], [4.3, 10.0], [4.4, 10.0], [4.5, 10.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 11.0], [5.0, 11.0], [5.1, 11.0], [5.2, 11.0], [5.3, 11.0], [5.4, 11.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 12.0], [5.9, 12.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 13.0], [6.4, 14.0], [6.5, 14.0], [6.6, 14.0], [6.7, 15.0], [6.8, 15.0], [6.9, 15.0], [7.0, 16.0], [7.1, 17.0], [7.2, 18.0], [7.3, 23.0], [7.4, 67.0], [7.5, 84.0], [7.6, 85.0], [7.7, 86.0], [7.8, 87.0], [7.9, 87.0], [8.0, 87.0], [8.1, 88.0], [8.2, 88.0], [8.3, 88.0], [8.4, 89.0], [8.5, 89.0], [8.6, 89.0], [8.7, 89.0], [8.8, 89.0], [8.9, 90.0], [9.0, 90.0], [9.1, 90.0], [9.2, 90.0], [9.3, 90.0], [9.4, 90.0], [9.5, 90.0], [9.6, 91.0], [9.7, 91.0], [9.8, 91.0], [9.9, 91.0], [10.0, 91.0], [10.1, 91.0], [10.2, 91.0], [10.3, 91.0], [10.4, 92.0], [10.5, 92.0], [10.6, 92.0], [10.7, 92.0], [10.8, 92.0], [10.9, 92.0], [11.0, 92.0], [11.1, 92.0], [11.2, 92.0], [11.3, 92.0], [11.4, 93.0], [11.5, 93.0], [11.6, 93.0], [11.7, 93.0], [11.8, 93.0], [11.9, 93.0], [12.0, 93.0], [12.1, 93.0], [12.2, 93.0], [12.3, 93.0], [12.4, 93.0], [12.5, 94.0], [12.6, 94.0], [12.7, 94.0], [12.8, 94.0], [12.9, 94.0], [13.0, 94.0], [13.1, 94.0], [13.2, 94.0], [13.3, 94.0], [13.4, 94.0], [13.5, 94.0], [13.6, 94.0], [13.7, 94.0], [13.8, 94.0], [13.9, 94.0], [14.0, 95.0], [14.1, 95.0], [14.2, 95.0], [14.3, 95.0], [14.4, 95.0], [14.5, 95.0], [14.6, 95.0], [14.7, 95.0], [14.8, 95.0], [14.9, 95.0], [15.0, 95.0], [15.1, 95.0], [15.2, 95.0], [15.3, 95.0], [15.4, 95.0], [15.5, 95.0], [15.6, 95.0], [15.7, 96.0], [15.8, 96.0], [15.9, 96.0], [16.0, 96.0], [16.1, 96.0], [16.2, 96.0], [16.3, 96.0], [16.4, 96.0], [16.5, 96.0], [16.6, 96.0], [16.7, 96.0], [16.8, 96.0], [16.9, 96.0], [17.0, 96.0], [17.1, 97.0], [17.2, 97.0], [17.3, 97.0], [17.4, 97.0], [17.5, 97.0], [17.6, 97.0], [17.7, 97.0], [17.8, 97.0], [17.9, 97.0], [18.0, 97.0], [18.1, 97.0], [18.2, 97.0], [18.3, 97.0], [18.4, 97.0], [18.5, 97.0], [18.6, 97.0], [18.7, 97.0], [18.8, 98.0], [18.9, 98.0], [19.0, 98.0], [19.1, 98.0], [19.2, 98.0], [19.3, 98.0], [19.4, 98.0], [19.5, 98.0], [19.6, 98.0], [19.7, 98.0], [19.8, 98.0], [19.9, 98.0], [20.0, 98.0], [20.1, 98.0], [20.2, 98.0], [20.3, 98.0], [20.4, 98.0], [20.5, 98.0], [20.6, 98.0], [20.7, 98.0], [20.8, 99.0], [20.9, 99.0], [21.0, 99.0], [21.1, 99.0], [21.2, 99.0], [21.3, 99.0], [21.4, 99.0], [21.5, 99.0], [21.6, 99.0], [21.7, 99.0], [21.8, 99.0], [21.9, 99.0], [22.0, 99.0], [22.1, 99.0], [22.2, 99.0], [22.3, 99.0], [22.4, 99.0], [22.5, 99.0], [22.6, 99.0], [22.7, 100.0], [22.8, 100.0], [22.9, 100.0], [23.0, 100.0], [23.1, 100.0], [23.2, 100.0], [23.3, 100.0], [23.4, 100.0], [23.5, 100.0], [23.6, 100.0], [23.7, 100.0], [23.8, 100.0], [23.9, 100.0], [24.0, 100.0], [24.1, 100.0], [24.2, 100.0], [24.3, 100.0], [24.4, 100.0], [24.5, 100.0], [24.6, 101.0], [24.7, 101.0], [24.8, 101.0], [24.9, 101.0], [25.0, 101.0], [25.1, 101.0], [25.2, 101.0], [25.3, 101.0], [25.4, 101.0], [25.5, 101.0], [25.6, 101.0], [25.7, 101.0], [25.8, 101.0], [25.9, 101.0], [26.0, 101.0], [26.1, 101.0], [26.2, 101.0], [26.3, 101.0], [26.4, 102.0], [26.5, 102.0], [26.6, 102.0], [26.7, 102.0], [26.8, 102.0], [26.9, 102.0], [27.0, 102.0], [27.1, 102.0], [27.2, 102.0], [27.3, 102.0], [27.4, 102.0], [27.5, 102.0], [27.6, 102.0], [27.7, 102.0], [27.8, 102.0], [27.9, 103.0], [28.0, 103.0], [28.1, 103.0], [28.2, 103.0], [28.3, 103.0], [28.4, 103.0], [28.5, 103.0], [28.6, 103.0], [28.7, 103.0], [28.8, 103.0], [28.9, 103.0], [29.0, 103.0], [29.1, 103.0], [29.2, 103.0], [29.3, 104.0], [29.4, 104.0], [29.5, 104.0], [29.6, 104.0], [29.7, 104.0], [29.8, 104.0], [29.9, 104.0], [30.0, 104.0], [30.1, 104.0], [30.2, 104.0], [30.3, 104.0], [30.4, 104.0], [30.5, 105.0], [30.6, 105.0], [30.7, 105.0], [30.8, 105.0], [30.9, 105.0], [31.0, 105.0], [31.1, 105.0], [31.2, 105.0], [31.3, 105.0], [31.4, 105.0], [31.5, 105.0], [31.6, 105.0], [31.7, 106.0], [31.8, 106.0], [31.9, 106.0], [32.0, 106.0], [32.1, 106.0], [32.2, 106.0], [32.3, 106.0], [32.4, 106.0], [32.5, 106.0], [32.6, 107.0], [32.7, 107.0], [32.8, 107.0], [32.9, 107.0], [33.0, 107.0], [33.1, 107.0], [33.2, 107.0], [33.3, 107.0], [33.4, 108.0], [33.5, 108.0], [33.6, 108.0], [33.7, 108.0], [33.8, 108.0], [33.9, 108.0], [34.0, 109.0], [34.1, 109.0], [34.2, 109.0], [34.3, 109.0], [34.4, 109.0], [34.5, 109.0], [34.6, 110.0], [34.7, 110.0], [34.8, 110.0], [34.9, 110.0], [35.0, 110.0], [35.1, 111.0], [35.2, 111.0], [35.3, 111.0], [35.4, 111.0], [35.5, 112.0], [35.6, 112.0], [35.7, 112.0], [35.8, 113.0], [35.9, 113.0], [36.0, 113.0], [36.1, 114.0], [36.2, 115.0], [36.3, 116.0], [36.4, 121.0], [36.5, 129.0], [36.6, 165.0], [36.7, 179.0], [36.8, 181.0], [36.9, 182.0], [37.0, 183.0], [37.1, 184.0], [37.2, 184.0], [37.3, 184.0], [37.4, 185.0], [37.5, 185.0], [37.6, 186.0], [37.7, 186.0], [37.8, 186.0], [37.9, 186.0], [38.0, 187.0], [38.1, 187.0], [38.2, 187.0], [38.3, 187.0], [38.4, 188.0], [38.5, 188.0], [38.6, 188.0], [38.7, 188.0], [38.8, 189.0], [38.9, 189.0], [39.0, 189.0], [39.1, 189.0], [39.2, 189.0], [39.3, 190.0], [39.4, 190.0], [39.5, 190.0], [39.6, 190.0], [39.7, 190.0], [39.8, 190.0], [39.9, 191.0], [40.0, 191.0], [40.1, 191.0], [40.2, 191.0], [40.3, 191.0], [40.4, 191.0], [40.5, 192.0], [40.6, 192.0], [40.7, 192.0], [40.8, 192.0], [40.9, 192.0], [41.0, 192.0], [41.1, 192.0], [41.2, 193.0], [41.3, 193.0], [41.4, 193.0], [41.5, 193.0], [41.6, 193.0], [41.7, 193.0], [41.8, 193.0], [41.9, 194.0], [42.0, 194.0], [42.1, 194.0], [42.2, 194.0], [42.3, 194.0], [42.4, 194.0], [42.5, 194.0], [42.6, 194.0], [42.7, 195.0], [42.8, 195.0], [42.9, 195.0], [43.0, 195.0], [43.1, 195.0], [43.2, 195.0], [43.3, 195.0], [43.4, 196.0], [43.5, 196.0], [43.6, 196.0], [43.7, 196.0], [43.8, 196.0], [43.9, 196.0], [44.0, 196.0], [44.1, 197.0], [44.2, 197.0], [44.3, 197.0], [44.4, 197.0], [44.5, 197.0], [44.6, 197.0], [44.7, 197.0], [44.8, 198.0], [44.9, 198.0], [45.0, 198.0], [45.1, 198.0], [45.2, 198.0], [45.3, 198.0], [45.4, 198.0], [45.5, 199.0], [45.6, 199.0], [45.7, 199.0], [45.8, 199.0], [45.9, 199.0], [46.0, 199.0], [46.1, 199.0], [46.2, 199.0], [46.3, 200.0], [46.4, 200.0], [46.5, 200.0], [46.6, 200.0], [46.7, 200.0], [46.8, 200.0], [46.9, 201.0], [47.0, 201.0], [47.1, 201.0], [47.2, 201.0], [47.3, 201.0], [47.4, 201.0], [47.5, 201.0], [47.6, 202.0], [47.7, 202.0], [47.8, 202.0], [47.9, 202.0], [48.0, 202.0], [48.1, 202.0], [48.2, 203.0], [48.3, 203.0], [48.4, 203.0], [48.5, 203.0], [48.6, 203.0], [48.7, 203.0], [48.8, 204.0], [48.9, 204.0], [49.0, 204.0], [49.1, 204.0], [49.2, 204.0], [49.3, 205.0], [49.4, 205.0], [49.5, 205.0], [49.6, 205.0], [49.7, 205.0], [49.8, 206.0], [49.9, 206.0], [50.0, 206.0], [50.1, 206.0], [50.2, 206.0], [50.3, 207.0], [50.4, 207.0], [50.5, 207.0], [50.6, 207.0], [50.7, 208.0], [50.8, 208.0], [50.9, 208.0], [51.0, 209.0], [51.1, 209.0], [51.2, 209.0], [51.3, 209.0], [51.4, 210.0], [51.5, 210.0], [51.6, 210.0], [51.7, 211.0], [51.8, 211.0], [51.9, 211.0], [52.0, 212.0], [52.1, 212.0], [52.2, 213.0], [52.3, 214.0], [52.4, 214.0], [52.5, 215.0], [52.6, 216.0], [52.7, 217.0], [52.8, 219.0], [52.9, 223.0], [53.0, 255.0], [53.1, 277.0], [53.2, 279.0], [53.3, 281.0], [53.4, 281.0], [53.5, 282.0], [53.6, 283.0], [53.7, 284.0], [53.8, 285.0], [53.9, 285.0], [54.0, 285.0], [54.1, 286.0], [54.2, 286.0], [54.3, 287.0], [54.4, 287.0], [54.5, 287.0], [54.6, 288.0], [54.7, 288.0], [54.8, 289.0], [54.9, 289.0], [55.0, 289.0], [55.1, 290.0], [55.2, 290.0], [55.3, 290.0], [55.4, 290.0], [55.5, 290.0], [55.6, 291.0], [55.7, 291.0], [55.8, 291.0], [55.9, 292.0], [56.0, 292.0], [56.1, 292.0], [56.2, 293.0], [56.3, 293.0], [56.4, 293.0], [56.5, 293.0], [56.6, 294.0], [56.7, 294.0], [56.8, 294.0], [56.9, 294.0], [57.0, 294.0], [57.1, 295.0], [57.2, 295.0], [57.3, 295.0], [57.4, 295.0], [57.5, 295.0], [57.6, 296.0], [57.7, 296.0], [57.8, 296.0], [57.9, 296.0], [58.0, 296.0], [58.1, 297.0], [58.2, 297.0], [58.3, 297.0], [58.4, 297.0], [58.5, 297.0], [58.6, 298.0], [58.7, 298.0], [58.8, 298.0], [58.9, 298.0], [59.0, 298.0], [59.1, 299.0], [59.2, 299.0], [59.3, 299.0], [59.4, 299.0], [59.5, 299.0], [59.6, 300.0], [59.7, 300.0], [59.8, 300.0], [59.9, 300.0], [60.0, 300.0], [60.1, 301.0], [60.2, 301.0], [60.3, 301.0], [60.4, 301.0], [60.5, 302.0], [60.6, 302.0], [60.7, 302.0], [60.8, 302.0], [60.9, 302.0], [61.0, 303.0], [61.1, 303.0], [61.2, 303.0], [61.3, 303.0], [61.4, 303.0], [61.5, 304.0], [61.6, 304.0], [61.7, 304.0], [61.8, 305.0], [61.9, 305.0], [62.0, 305.0], [62.1, 305.0], [62.2, 306.0], [62.3, 306.0], [62.4, 306.0], [62.5, 307.0], [62.6, 307.0], [62.7, 307.0], [62.8, 308.0], [62.9, 308.0], [63.0, 309.0], [63.1, 309.0], [63.2, 309.0], [63.3, 310.0], [63.4, 310.0], [63.5, 311.0], [63.6, 311.0], [63.7, 312.0], [63.8, 312.0], [63.9, 313.0], [64.0, 314.0], [64.1, 315.0], [64.2, 316.0], [64.3, 317.0], [64.4, 319.0], [64.5, 320.0], [64.6, 341.0], [64.7, 352.0], [64.8, 369.0], [64.9, 377.0], [65.0, 378.0], [65.1, 380.0], [65.2, 381.0], [65.3, 382.0], [65.4, 383.0], [65.5, 383.0], [65.6, 384.0], [65.7, 385.0], [65.8, 386.0], [65.9, 387.0], [66.0, 387.0], [66.1, 388.0], [66.2, 388.0], [66.3, 388.0], [66.4, 389.0], [66.5, 389.0], [66.6, 389.0], [66.7, 390.0], [66.8, 390.0], [66.9, 391.0], [67.0, 391.0], [67.1, 391.0], [67.2, 392.0], [67.3, 392.0], [67.4, 392.0], [67.5, 393.0], [67.6, 393.0], [67.7, 393.0], [67.8, 393.0], [67.9, 394.0], [68.0, 394.0], [68.1, 394.0], [68.2, 395.0], [68.3, 395.0], [68.4, 395.0], [68.5, 395.0], [68.6, 396.0], [68.7, 396.0], [68.8, 396.0], [68.9, 397.0], [69.0, 397.0], [69.1, 397.0], [69.2, 398.0], [69.3, 398.0], [69.4, 398.0], [69.5, 398.0], [69.6, 399.0], [69.7, 399.0], [69.8, 399.0], [69.9, 400.0], [70.0, 400.0], [70.1, 400.0], [70.2, 400.0], [70.3, 401.0], [70.4, 401.0], [70.5, 402.0], [70.6, 402.0], [70.7, 402.0], [70.8, 403.0], [70.9, 403.0], [71.0, 403.0], [71.1, 404.0], [71.2, 404.0], [71.3, 405.0], [71.4, 405.0], [71.5, 406.0], [71.6, 406.0], [71.7, 407.0], [71.8, 407.0], [71.9, 408.0], [72.0, 408.0], [72.1, 409.0], [72.2, 409.0], [72.3, 410.0], [72.4, 411.0], [72.5, 412.0], [72.6, 413.0], [72.7, 414.0], [72.8, 415.0], [72.9, 416.0], [73.0, 417.0], [73.1, 419.0], [73.2, 422.0], [73.3, 446.0], [73.4, 475.0], [73.5, 480.0], [73.6, 481.0], [73.7, 483.0], [73.8, 484.0], [73.9, 484.0], [74.0, 485.0], [74.1, 486.0], [74.2, 487.0], [74.3, 487.0], [74.4, 488.0], [74.5, 489.0], [74.6, 489.0], [74.7, 490.0], [74.8, 490.0], [74.9, 491.0], [75.0, 492.0], [75.1, 492.0], [75.2, 493.0], [75.3, 493.0], [75.4, 494.0], [75.5, 494.0], [75.6, 495.0], [75.7, 495.0], [75.8, 496.0], [75.9, 496.0], [76.0, 497.0], [76.1, 497.0], [76.2, 498.0], [76.3, 498.0], [76.4, 499.0], [76.5, 499.0], [76.6, 500.0], [76.7, 501.0], [76.8, 502.0], [76.9, 502.0], [77.0, 503.0], [77.1, 504.0], [77.2, 505.0], [77.3, 505.0], [77.4, 506.0], [77.5, 507.0], [77.6, 507.0], [77.7, 508.0], [77.8, 509.0], [77.9, 510.0], [78.0, 511.0], [78.1, 514.0], [78.2, 516.0], [78.3, 519.0], [78.4, 546.0], [78.5, 571.0], [78.6, 577.0], [78.7, 582.0], [78.8, 584.0], [78.9, 585.0], [79.0, 587.0], [79.1, 588.0], [79.2, 589.0], [79.3, 590.0], [79.4, 591.0], [79.5, 593.0], [79.6, 593.0], [79.7, 594.0], [79.8, 595.0], [79.9, 596.0], [80.0, 597.0], [80.1, 598.0], [80.2, 599.0], [80.3, 600.0], [80.4, 601.0], [80.5, 602.0], [80.6, 602.0], [80.7, 603.0], [80.8, 604.0], [80.9, 606.0], [81.0, 607.0], [81.1, 608.0], [81.2, 610.0], [81.3, 612.0], [81.4, 618.0], [81.5, 647.0], [81.6, 672.0], [81.7, 678.0], [81.8, 682.0], [81.9, 685.0], [82.0, 687.0], [82.1, 689.0], [82.2, 691.0], [82.3, 693.0], [82.4, 694.0], [82.5, 696.0], [82.6, 698.0], [82.7, 699.0], [82.8, 701.0], [82.9, 702.0], [83.0, 705.0], [83.1, 707.0], [83.2, 709.0], [83.3, 712.0], [83.4, 714.0], [83.5, 753.0], [83.6, 774.0], [83.7, 781.0], [83.8, 786.0], [83.9, 789.0], [84.0, 792.0], [84.1, 794.0], [84.2, 796.0], [84.3, 797.0], [84.4, 802.0], [84.5, 804.0], [84.6, 810.0], [84.7, 840.0], [84.8, 877.0], [84.9, 887.0], [85.0, 892.0], [85.1, 897.0], [85.2, 900.0], [85.3, 905.0], [85.4, 955.0], [85.5, 981.0], [85.6, 989.0], [85.7, 997.0], [85.8, 1002.0], [85.9, 1015.0], [86.0, 1074.0], [86.1, 1088.0], [86.2, 1099.0], [86.3, 1105.0], [86.4, 1112.0], [86.5, 1125.0], [86.6, 1176.0], [86.7, 1187.0], [86.8, 1193.0], [86.9, 1198.0], [87.0, 1200.0], [87.1, 1202.0], [87.2, 1206.0], [87.3, 1209.0], [87.4, 1214.0], [87.5, 1255.0], [87.6, 1279.0], [87.7, 1285.0], [87.8, 1288.0], [87.9, 1290.0], [88.0, 1291.0], [88.1, 1294.0], [88.2, 1295.0], [88.3, 1296.0], [88.4, 1297.0], [88.5, 1299.0], [88.6, 1301.0], [88.7, 1303.0], [88.8, 1305.0], [88.9, 1306.0], [89.0, 1308.0], [89.1, 1310.0], [89.2, 1312.0], [89.3, 1315.0], [89.4, 1319.0], [89.5, 1333.0], [89.6, 1375.0], [89.7, 1383.0], [89.8, 1386.0], [89.9, 1389.0], [90.0, 1391.0], [90.1, 1392.0], [90.2, 1393.0], [90.3, 1395.0], [90.4, 1396.0], [90.5, 1398.0], [90.6, 1399.0], [90.7, 1401.0], [90.8, 1402.0], [90.9, 1403.0], [91.0, 1404.0], [91.1, 1405.0], [91.2, 1407.0], [91.3, 1409.0], [91.4, 1411.0], [91.5, 1415.0], [91.6, 1420.0], [91.7, 1483.0], [91.8, 1487.0], [91.9, 1490.0], [92.0, 1492.0], [92.1, 1496.0], [92.2, 1498.0], [92.3, 1501.0], [92.4, 1505.0], [92.5, 1507.0], [92.6, 1509.0], [92.7, 1514.0], [92.8, 1567.0], [92.9, 1584.0], [93.0, 1589.0], [93.1, 1591.0], [93.2, 1593.0], [93.3, 1594.0], [93.4, 1596.0], [93.5, 1598.0], [93.6, 1599.0], [93.7, 1601.0], [93.8, 1603.0], [93.9, 1607.0], [94.0, 1612.0], [94.1, 1636.0], [94.2, 1683.0], [94.3, 1692.0], [94.4, 1694.0], [94.5, 1697.0], [94.6, 1700.0], [94.7, 1703.0], [94.8, 1706.0], [94.9, 1712.0], [95.0, 1751.0], [95.1, 1788.0], [95.2, 1795.0], [95.3, 1800.0], [95.4, 1810.0], [95.5, 1875.0], [95.6, 1895.0], [95.7, 1902.0], [95.8, 1984.0], [95.9, 1995.0], [96.0, 2051.0], [96.1, 2101.0], [96.2, 2180.0], [96.3, 2226.0], [96.4, 2293.0], [96.5, 2343.0], [96.6, 2395.0], [96.7, 2486.0], [96.8, 2589.0], [96.9, 2692.0], [97.0, 2804.0], [97.1, 2983.0], [97.2, 3086.0], [97.3, 3113.0], [97.4, 3192.0], [97.5, 3203.0], [97.6, 3215.0], [97.7, 3290.0], [97.8, 3303.0], [97.9, 3384.0], [98.0, 3414.0], [98.1, 3503.0], [98.2, 3572.0], [98.3, 3601.0], [98.4, 3704.0], [98.5, 3791.0], [98.6, 3903.0], [98.7, 4095.0], [98.8, 4194.0], [98.9, 4602.0], [99.0, 5004.0], [99.1, 5006.0], [99.2, 5010.0], [99.3, 7408.0], [99.4, 7588.0], [99.5, 7615.0], [99.6, 7703.0], [99.7, 7801.0], [99.8, 7819.0], [99.9, 15305.0], [100.0, 15697.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4149.0, "series": [{"data": [[0.0, 3971.0], [600.0, 430.0], [700.0, 288.0], [800.0, 142.0], [900.0, 101.0], [1000.0, 80.0], [1100.0, 136.0], [1200.0, 268.0], [1300.0, 370.0], [1400.0, 289.0], [1500.0, 243.0], [1600.0, 163.0], [1700.0, 127.0], [1800.0, 63.0], [1900.0, 48.0], [2000.0, 29.0], [2100.0, 30.0], [2200.0, 31.0], [2300.0, 35.0], [2400.0, 16.0], [2500.0, 20.0], [2600.0, 12.0], [2700.0, 16.0], [2800.0, 12.0], [2900.0, 13.0], [3000.0, 17.0], [3100.0, 39.0], [3300.0, 29.0], [3200.0, 56.0], [3400.0, 23.0], [3500.0, 37.0], [3600.0, 18.0], [3700.0, 24.0], [3800.0, 10.0], [3900.0, 11.0], [4000.0, 13.0], [4100.0, 16.0], [4200.0, 6.0], [4300.0, 4.0], [4600.0, 6.0], [4400.0, 3.0], [4500.0, 2.0], [4800.0, 3.0], [5000.0, 61.0], [7400.0, 11.0], [7500.0, 21.0], [7600.0, 15.0], [7700.0, 24.0], [7800.0, 24.0], [7900.0, 1.0], [15300.0, 21.0], [15200.0, 1.0], [15500.0, 1.0], [15600.0, 5.0], [100.0, 4149.0], [200.0, 2329.0], [300.0, 1815.0], [400.0, 1171.0], [500.0, 662.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 173.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 8995.0, "series": [{"data": [[0.0, 7999.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 173.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 394.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 8995.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.890209394453883, "minX": 1.64243124E12, "maxY": 267.37784401390866, "series": [{"data": [[1.6424313E12, 20.0], [1.64243142E12, 19.890209394453883], [1.64243124E12, 267.37784401390866], [1.64243136E12, 20.0]], "isOverall": false, "label": "ddos carts-id", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.0, "maxY": 15607.0, "series": [{"data": [[2.0, 104.0], [3.0, 103.0], [4.0, 97.0], [5.0, 102.0], [6.0, 90.0], [7.0, 194.0], [8.0, 205.0], [9.0, 100.0], [10.0, 106.0], [11.0, 190.0], [12.0, 194.0], [13.0, 97.0], [14.0, 190.0], [15.0, 102.5], [16.0, 105.0], [18.0, 195.0], [19.0, 99.0], [20.0, 116.96390168970855], [21.0, 4081.25], [22.0, 5343.333333333333], [23.0, 7859.5], [24.0, 15607.0], [25.0, 349.6629213483146], [26.0, 15396.0], [27.0, 15389.0], [29.0, 15386.5], [30.0, 15308.0], [33.0, 5139.333333333333], [32.0, 15305.0], [35.0, 7701.5], [34.0, 15304.0], [36.0, 15303.0], [39.0, 7658.5], [38.0, 15304.666666666666], [41.0, 7657.5], [40.0, 15308.0], [42.0, 15300.0], [45.0, 15299.0], [44.0, 15302.0], [47.0, 373.5727272727273], [49.0, 1699.5], [48.0, 268.4835164835165], [51.0, 304.35714285714283], [50.0, 1124.0], [53.0, 1202.0], [52.0, 1202.0], [55.0, 1196.0], [54.0, 1202.0], [57.0, 1201.0], [56.0, 1199.0], [59.0, 1198.0], [58.0, 1201.0], [61.0, 1196.5], [63.0, 1193.5], [62.0, 1189.0], [67.0, 1176.0], [66.0, 367.75], [65.0, 1115.0], [64.0, 1113.0], [71.0, 1089.0], [70.0, 1092.0], [69.0, 1095.0], [68.0, 1174.0], [75.0, 192.0], [74.0, 91.0], [73.0, 1088.0], [72.0, 93.0], [76.0, 119.66666666666666], [78.0, 116.0], [77.0, 283.0], [83.0, 198.0], [82.0, 255.0], [80.0, 155.0], [87.0, 339.0], [85.0, 202.0], [84.0, 239.33333333333334], [91.0, 313.0], [90.0, 316.0], [89.0, 155.0], [88.0, 315.0], [95.0, 587.0], [94.0, 197.0], [93.0, 257.5], [92.0, 391.0], [99.0, 203.0], [98.0, 3946.0], [97.0, 90.0], [100.0, 351.66666666666663], [101.0, 138.93333333333334], [103.0, 103.0], [102.0, 244.5], [107.0, 162.0], [106.0, 488.0], [105.0, 296.0], [104.0, 303.0], [109.0, 390.0], [108.0, 845.5], [114.0, 170.5], [112.0, 1413.0], [119.0, 306.0], [116.0, 301.0], [123.0, 304.5], [122.0, 314.0], [125.0, 237.4], [127.0, 299.0], [126.0, 415.0], [124.0, 1053.8], [130.0, 187.0], [131.0, 173.6], [132.0, 296.0], [133.0, 485.0], [134.0, 300.0], [129.0, 1413.0], [128.0, 306.5], [143.0, 4089.5], [141.0, 393.0], [140.0, 1402.0], [139.0, 7700.0], [138.0, 4548.0], [137.0, 308.0], [136.0, 302.0], [144.0, 931.4545454545455], [151.0, 1320.0], [150.0, 383.0], [149.0, 391.0], [147.0, 484.0], [146.0, 7693.0], [145.0, 483.0], [153.0, 242.08333333333331], [155.0, 337.3333333333333], [159.0, 211.0], [158.0, 4453.0], [157.0, 1315.0], [156.0, 1316.0], [154.0, 317.0], [152.0, 402.0], [167.0, 206.0], [166.0, 503.4], [164.0, 7592.0], [163.0, 3067.0], [161.0, 1391.0], [160.0, 1308.0], [169.0, 409.1666666666667], [175.0, 296.0], [174.0, 799.5], [172.0, 7590.0], [171.0, 7596.0], [170.0, 848.5], [168.0, 804.5], [183.0, 116.0], [182.0, 1215.0], [181.0, 709.5], [180.0, 212.0], [179.0, 7509.0], [178.0, 2722.333333333333], [177.0, 293.0], [176.0, 626.3333333333333], [191.0, 196.0], [190.0, 249.0], [189.0, 2002.5], [187.0, 111.0], [186.0, 206.0], [185.0, 2636.666666666667], [199.0, 1202.5], [197.0, 3845.75], [196.0, 106.0], [195.0, 1288.0], [194.0, 287.0], [193.0, 1209.0], [192.0, 204.0], [206.0, 375.90000000000003], [207.0, 206.33333333333334], [205.0, 206.66666666666666], [204.0, 222.33333333333334], [203.0, 212.2], [202.0, 3842.0], [201.0, 7491.0], [200.0, 646.5], [208.0, 393.5], [215.0, 199.0], [214.0, 172.8], [213.0, 287.0], [212.0, 189.88888888888889], [211.0, 295.0], [210.0, 249.0], [209.0, 186.0], [223.0, 206.0], [222.0, 233.0], [221.0, 207.0], [220.0, 289.0], [219.0, 208.0], [218.0, 241.11111111111111], [217.0, 198.0], [216.0, 211.28571428571428], [231.0, 281.0], [230.0, 291.0], [229.0, 283.0], [228.0, 354.55555555555554], [227.0, 247.5], [226.0, 675.625], [225.0, 203.0], [224.0, 226.0], [239.0, 326.75], [238.0, 403.0], [237.0, 363.5], [236.0, 680.3333333333334], [235.0, 896.4], [233.0, 596.0], [232.0, 306.4], [241.0, 483.8333333333333], [242.0, 425.5], [246.0, 520.25], [247.0, 332.0], [245.0, 387.0], [244.0, 355.375], [243.0, 508.0], [240.0, 373.5], [255.0, 346.0], [253.0, 336.57142857142856], [252.0, 348.0], [249.0, 493.0], [248.0, 390.6666666666667], [270.0, 317.0], [264.0, 570.0500000000001], [265.0, 383.33333333333337], [271.0, 1406.25], [269.0, 1139.75], [268.0, 1414.5], [267.0, 1415.0], [266.0, 645.7142857142857], [263.0, 259.8888888888889], [257.0, 408.0], [256.0, 372.6666666666667], [259.0, 414.0], [258.0, 404.0], [262.0, 347.75], [261.0, 231.33333333333331], [260.0, 396.0], [285.0, 982.6666666666666], [286.0, 938.0], [284.0, 1309.0], [275.0, 1211.5], [273.0, 1252.6], [272.0, 1169.3333333333333], [282.0, 7815.0], [281.0, 4621.5], [280.0, 1189.75], [279.0, 2994.666666666667], [277.0, 1396.0], [276.0, 1400.0], [303.0, 1020.6799999999998], [298.0, 1261.0], [300.0, 950.7542731115601], [291.0, 4603.5], [290.0, 4703.25], [289.0, 1208.0], [288.0, 325.0], [301.0, 572.1428571428572], [302.0, 2267.461538461538], [299.0, 1492.0], [297.0, 7804.0], [296.0, 1944.1666666666665], [295.0, 1001.5], [294.0, 7804.0], [293.0, 4604.5], [292.0, 3533.333333333333], [305.0, 2378.100000000001], [304.0, 1198.090909090909], [306.0, 1936.7777777777771], [307.0, 1496.3823529411766], [308.0, 2929.333333333333], [309.0, 603.5], [310.0, 949.8421052631579], [311.0, 807.2258064516129], [312.0, 1375.7857142857142], [318.0, 935.6538461538463], [319.0, 892.1351351351352], [316.0, 395.2], [317.0, 1162.7272727272725], [313.0, 697.730769230769], [314.0, 1182.8888888888887], [315.0, 1237.230769230769], [320.0, 588.3555172413778], [1.0, 188.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[169.53447981322245, 532.3619953305666]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 320.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.64243124E12, "maxY": 70770.56666666667, "series": [{"data": [[1.6424313E12, 14197.516666666666], [1.64243142E12, 8805.55], [1.64243124E12, 70770.56666666667], [1.64243136E12, 14352.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6424313E12, 0.0], [1.64243142E12, 0.0], [1.64243124E12, 0.0], [1.64243136E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 111.03282399547267, "minX": 1.64243124E12, "maxY": 841.7786388474942, "series": [{"data": [[1.6424313E12, 120.59950859950874], [1.64243142E12, 111.03282399547267], [1.64243124E12, 841.7786388474942], [1.64243136E12, 116.84861111111118]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 109.86700622524064, "minX": 1.64243124E12, "maxY": 801.6341778440133, "series": [{"data": [[1.6424313E12, 119.1755001755001], [1.64243142E12, 109.86700622524064], [1.64243124E12, 801.6341778440133], [1.64243136E12, 115.53958333333317]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.64243124E12, "maxY": 15697.0, "series": [{"data": [[1.6424313E12, 788.0], [1.64243142E12, 491.0], [1.64243124E12, 15697.0], [1.64243136E12, 601.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6424313E12, 4.0], [1.64243142E12, 4.0], [1.64243124E12, 6.0], [1.64243136E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6424313E12, 4.0], [1.64243142E12, 4.0], [1.64243124E12, 6.0], [1.64243136E12, 4.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6424313E12, 4.0], [1.64243142E12, 4.0], [1.64243124E12, 6.0], [1.64243136E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6424313E12, 2.0], [1.64243142E12, 3.0], [1.64243124E12, 3.0], [1.64243136E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6424313E12, 101.0], [1.64243142E12, 100.0], [1.64243124E12, 716.5], [1.64243136E12, 100.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 86.0, "minX": 17.0, "maxY": 4693.0, "series": [{"data": [[35.0, 294.0], [38.0, 191.0], [39.0, 202.5], [40.0, 109.0], [41.0, 151.0], [42.0, 110.0], [43.0, 106.5], [45.0, 108.0], [44.0, 108.0], [46.0, 103.0], [47.0, 101.0], [49.0, 100.0], [48.0, 101.0], [51.0, 98.0], [50.0, 98.0], [52.0, 98.0], [53.0, 97.0], [54.0, 95.5], [55.0, 95.0], [56.0, 98.5], [67.0, 290.0], [94.0, 1073.5], [106.0, 2320.5], [119.0, 1591.0], [133.0, 182.0], [190.0, 4693.0], [248.0, 3298.0], [17.0, 105.0], [293.0, 3514.0], [367.0, 4099.0], [31.0, 199.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[45.0, 99.0], [48.0, 105.0], [50.0, 86.0], [53.0, 94.0], [67.0, 104.0], [151.0, 302.0], [190.0, 992.0], [246.0, 903.5], [248.0, 398.5], [267.0, 611.0], [268.0, 294.0], [287.0, 602.0], [281.0, 410.0], [293.0, 624.0], [291.0, 588.0], [320.0, 399.5], [335.0, 490.0], [342.0, 511.5], [344.0, 587.0], [351.0, 385.0], [367.0, 578.0], [376.0, 391.0], [382.0, 301.0], [396.0, 401.5], [389.0, 385.0], [394.0, 299.0], [407.0, 291.0], [403.0, 317.0], [434.0, 507.0], [436.0, 388.5], [454.0, 303.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 454.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.0, "minX": 17.0, "maxY": 4693.0, "series": [{"data": [[35.0, 294.0], [38.0, 191.0], [39.0, 202.5], [40.0, 108.5], [41.0, 110.5], [42.0, 109.0], [43.0, 105.5], [45.0, 107.5], [44.0, 107.0], [46.0, 102.0], [47.0, 101.0], [49.0, 100.0], [48.0, 101.0], [51.0, 97.0], [50.0, 98.0], [52.0, 98.0], [53.0, 97.0], [54.0, 95.0], [55.0, 95.0], [56.0, 97.0], [67.0, 290.0], [94.0, 1073.5], [106.0, 2320.5], [119.0, 1590.0], [133.0, 182.0], [190.0, 4693.0], [248.0, 3295.0], [17.0, 105.0], [293.0, 3514.0], [367.0, 4099.0], [31.0, 197.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[45.0, 99.0], [48.0, 105.0], [50.0, 53.0], [53.0, 93.0], [67.0, 102.5], [151.0, 301.0], [190.0, 805.0], [246.0, 903.5], [248.0, 398.5], [267.0, 608.0], [268.0, 291.0], [287.0, 599.0], [281.0, 405.0], [293.0, 619.0], [291.0, 510.0], [320.0, 398.0], [335.0, 487.0], [342.0, 507.0], [344.0, 585.5], [351.0, 308.0], [367.0, 501.5], [376.0, 389.0], [382.0, 299.5], [396.0, 396.0], [389.0, 318.0], [394.0, 299.0], [407.0, 289.0], [403.0, 309.0], [434.0, 501.0], [436.0, 387.5], [454.0, 302.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 454.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 29.333333333333332, "minX": 1.64243124E12, "maxY": 167.8, "series": [{"data": [[1.6424313E12, 47.53333333333333], [1.64243142E12, 29.333333333333332], [1.64243124E12, 167.8], [1.64243136E12, 48.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64243124E12, "maxY": 148.91666666666666, "series": [{"data": [[1.6424313E12, 47.483333333333334], [1.64243142E12, 29.45], [1.64243124E12, 17.833333333333332], [1.64243136E12, 48.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64243124E12, 0.9833333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.64243124E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.64243124E12, 148.91666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64243142E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 17.833333333333332, "minX": 1.64243124E12, "maxY": 149.91666666666666, "series": [{"data": [[1.64243124E12, 149.91666666666666]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-failure", "isController": false}, {"data": [[1.6424313E12, 47.483333333333334], [1.64243142E12, 29.45], [1.64243124E12, 17.833333333333332], [1.64243136E12, 48.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 17.833333333333332, "minX": 1.64243124E12, "maxY": 149.91666666666666, "series": [{"data": [[1.6424313E12, 47.483333333333334], [1.64243142E12, 29.45], [1.64243124E12, 17.833333333333332], [1.64243136E12, 48.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64243124E12, 149.91666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64243142E12, "title": "Total Transactions Per Second"}},
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

