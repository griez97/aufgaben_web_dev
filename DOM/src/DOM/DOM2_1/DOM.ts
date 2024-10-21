// Dom-Elements-TS-Level-2_1

// 1 get elements

const navHome = document.getElementById('navHome') as HTMLAnchorElement;

const navChange = document.getElementById('navChange') as HTMLAnchorElement;




// 2 function to change and make the word backwards

const reversed = () => {
    const ogrinalContent = navHome.textContent || '';
    const reversedContent = ogrinalContent?.split('').reverse().join('');
    navHome.textContent = reversedContent;
}

// split characters, revers their order, put them back together (join)

navChange.addEventListener('click', (event) => {
    event.preventDefault();
    reversed();
})