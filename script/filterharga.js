// PRICE RANGE
   let priceRanges = document.querySelectorAll('.js-price-range');

   priceRanges.forEach(el => {
      let downPriceInput = el.closest('.filter-price').querySelector('.js-price-down'),
            upPriceInput   = el.closest('.filter-price').querySelector('.js-price-up'),
            inputs         = [downPriceInput, upPriceInput];


        //get maxPrice for slider price
        const maxPrice = +upPriceInput.getAttribute('data-max');
        upPriceInput.value = maxPrice.toLocaleString() + ' p.';

        //Init price range slider
        noUiSlider.create(el, {
            range: {
                'min': 0,
                'max': maxPrice
            },
            behaviour: 'drag',
            connect  : true,
            start    : [0, maxPrice],
            step     : 1
        });

        //Update value after scroll pointer in slider
        el.noUiSlider.on('update', values => {
            let [downPrice, upPrice] = values;

            downPrice = Number(downPrice).toLocaleString() + ' р.';
            upPrice   = Number(upPrice).toLocaleString() + ' р.';

            downPriceInput.value = downPrice;
            upPriceInput.value   = upPrice;
        });

        //Change slider value after inputs change
        inputs.forEach(function (input, handle) {
            input.addEventListener('change', function () {
                let value = this.value;
                value = value.replace(/\s+/g, '');
                value = parseInt(value);

                el.noUiSlider.setHandle(handle, value);
            });
        });

    });

   //clear sliders value
   
   let clearBtn = document.querySelector('.js-clear-sliders');

   clearBtn.addEventListener('click', (e) => {
      let filterPrices = document.querySelectorAll('.filter-price');
      
      filterPrices.forEach(el => {
          let  priceRange = el.querySelector('.js-price-range'),
               priceRangeInputs = el.querySelectorAll('.filter-price__flex-row input');
         
           priceRangeInputs.forEach(function (input, handle) {
               let maxPrice = (handle) ? input.getAttribute('data-max') : 0;
              
               priceRange.noUiSlider.setHandle(handle, maxPrice);
           });          
      });     
   })