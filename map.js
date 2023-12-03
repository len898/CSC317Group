function filterStores() {
    var zipCodeInput = document.getElementById('zipCodeInput');
    var zipCode = zipCodeInput.value;

    document.getElementById('filterResult').innerHTML = '';

    var storeLocations = [
        { zip: '94102', image: 'assets/map3.png', address: '150 Van Ness Ave, San Francisco, CA 94102' },
        { zip: '94612', image: 'assets/map2.png', address: '1200 Clay St, Oakland, CA 94612' }
    ];

    var matchedStore = storeLocations.find(function (store) {
        return zipCode <= store.zip;
    });

    if (matchedStore) {
        showMapImage(matchedStore.image, matchedStore.address);
    } else {
        // Show the default map image if no match
        showMapImage('map.png', 'Default Location');
    }
}

function showMapImage(imageSrc, address) {
    var mapImage = document.getElementById('mapImage');
    mapImage.src = imageSrc;

    var filterResult = document.getElementById('filterResult');
    filterResult.innerHTML = 'Store Address: ' + address;
}
