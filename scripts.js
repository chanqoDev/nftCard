const nftCard = {
  title: 'Equilibrium #3420',
  subTitle: 'Our Equilibrium collection promotes balance and calm.',
  price: ' 0.041 ETH',
  time: '3 days left',
  creatorName: 'Jules Wyvern',
};

document.querySelector('.title').innerText = `${nftCard.title}`;
document.querySelector('.subTitle').innerText = `${nftCard.subTitle}`;
document.querySelector('.price').append(`${nftCard.price}`);
document.querySelector('.time').append(`${nftCard.time}`);
document.querySelector('.creatorName').append(`${nftCard.creatorName}`);
