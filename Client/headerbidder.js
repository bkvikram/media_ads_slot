// gobal vars
const ads = [];
let availableAds = [];
const selected = [];
const threshold = 1000;
const BASEURL = 'http://localhost:3000';

function findHighestBidderAds(callback) {
  let highestbid = 0;
  let secondHighestbid = 0;
  let highestBidIndex;
  let secondHighestBidIndex;
  for (let index = 0; index < availableAds.length; index++) {
    if (availableAds[index].cpi > highestbid) {
      highestbid = availableAds[index].cpi;
      highestBidIndex = index;
    }
  }
  for (let index = 0; index < availableAds.length; index++) {
    if (
      availableAds[index].cpi > secondHighestbid &&
      index !== highestBidIndex
    ) {
      secondHighestbid = availableAds[index].cpi;
      secondHighestBidIndex = index;
    }
  }
  if (highestBidIndex != undefined) {
    selected.push(availableAds[highestBidIndex]);
  }
  if (secondHighestBidIndex != undefined) {
    selected.push(availableAds[secondHighestBidIndex]);
  }
  callback(selected.length);
}

function publishAds(adsNo) {
  for (let i = 0; i < adsNo; i++) {
    let ad = document.getElementById('ad' + (i + 1));
    ad.setAttribute('href', selected[i].url);
    let adimage = document.getElementById('ad' + (i + 1) + 'image');
    adimage.setAttribute('src', './ad' + (i + 1) + '.PNG');
  }
}

window.onload = (event) => {
  setTimeout(function () {
    availableAds = [...ads];
    findHighestBidderAds(publishAds);
  }, threshold);
};

async function recordAnalytics(event) {
  const ad = event.currentTarget;
  event.preventDefault();
  let index;
  if (ad.id === 'ad1') {
    index = selected[0].id;
  } else if (ad.id === 'ad2') {
    index = selected[1].id;
  } else {
    return;
  }
  try {
    let response = await reportClick(index);
    let json = await response.json();
    console.log(json.message);
  } catch (error) {
    console.log('event not captured : ', error);
  }
  const href = ad.getAttribute('href');
  window.location.href = href;
}

function reportClick(index) {
  return fetch(BASEURL + `/analytics/recordClick/` + index);
}
