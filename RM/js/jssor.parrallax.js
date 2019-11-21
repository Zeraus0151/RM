window.jssor_2__slider_init = function() {

            var jssor_2__SlideshowTransitions = [
              {$Duration:800,$Opacity:2}
            ];

            var jssor_2__SlideoTransitions = [
              [{b:0,d:580,x:0}],
              [{b:0,d:1020,x:250}],
              [{b:0,d:1000,x:0}],
              [{b:0,d:1200,x:300,y:210}],
              [{b:0,d:400,x:0}],
              [{b:0,d:680,x:283}]
            ];

            var jssor_2__options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_2__SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_2__SlideoTransitions
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_2__slider = new $JssorSlider$("jssor_2", jssor_2__options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 700;

            function ScaleSlider() {
                var containerElement = jssor_2__slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_2__slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };