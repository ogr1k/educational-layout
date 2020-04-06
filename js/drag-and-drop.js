(function () {

    const sliderRightElement = document.querySelector('.right');
    const sliderLeftElement = document.querySelector('.left');
    const minPriceRangeElement = document.querySelector('.first-price');
    const maxPriceRangeElement = document.querySelector('.second-price');

    const dragPin = function (maxX, minX, element, evt) {
        evt.preventDefault();

        if (element === sliderLeftElement) {
            maxX = sliderRightElement.offsetLeft - 20;
        }

        if (element === sliderRightElement) {
            minX = sliderLeftElement.offsetLeft + 20;
        }

        let xPosition

        let startCoords = {
            x: evt.clientX,
        };


        const setMainPinPosition = function (mouseEvt) {
            let shift = {
                x: startCoords.x - mouseEvt.clientX,
            };

            startCoords = {
                x: mouseEvt.clientX,
            };

            xPosition = element.offsetLeft - shift.x;

            yPosition = -11;
            xPosition = Math.max(minX, Math.min(xPosition, maxX));

            element.style.top = yPosition + 'px';
            element.style.left = xPosition + 'px';
        };

        const onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();


            setMainPinPosition(moveEvt);

            function myRound100(val) {
                return Math.round(val / 100) * 100;
            }


            minPriceRangeElement.textContent = myRound100((sliderLeftElement.offsetLeft + 10) * 71.5);
            maxPriceRangeElement.textContent = myRound100((sliderRightElement.offsetLeft + 10) * 71.5);
        };

        const onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            setMainPinPosition(upEvt);

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    sliderRightElement.addEventListener('mousedown', dragPin.bind(null, 200, 10, sliderRightElement));
    sliderLeftElement.addEventListener('mousedown', dragPin.bind(null, 150, -10, sliderLeftElement));

})();
