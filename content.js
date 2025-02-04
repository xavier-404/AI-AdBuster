(async function () {
    const detectAds = async () => {
        let ads = document.querySelectorAll('iframe, div[class*=\"ad\"], img[src*=\"ads\"]');
        ads.forEach(async (ad) => {
            let description = await generateAdDescription(ad);
            transformAd(ad, description);
        });
    };

    const generateAdDescription = async (adElement) => {
        let adText = adElement.alt || adElement.title || "Mysterious ad detected";
        return `👻 This was an ad: ${adText}`;
    };

    const transformAd = (adElement, description) => {
        let replacement = document.createElement("div");
        replacement.textContent = description;
        replacement.style.cssText = "padding: 10px; font-style: italic; background: #f5f5f5; color: #333; border-radius: 5px;";
        adElement.replaceWith(replacement);
    };

    detectAds();
})();
