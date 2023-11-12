const toggleItem = document.getElementById( 'toggle-item' );
const list = document.querySelector( 'nav' );
const itemsToggle = document.querySelectorAll( '.toggle__item' );
console.log(itemsToggle)
        toggleItem.addEventListener( 'click', (e) => {
            list.classList.toggle( 'nav--visible' )
            itemsToggle.forEach( element => {
               element.classList.toggle('toggle__item-closed')
           })
            
        } )
        

    

