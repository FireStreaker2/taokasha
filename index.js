const replace = () => {
	document.querySelectorAll("img").forEach((img) => {
		if (img.src.startsWith("https://enka.network/ui/UI_AvatarIcon_"))
			img.src = "https://enka.network/ui/UI_AvatarIcon_HutaoCostumeWinter.png";
		else if (img.src.startsWith("https://enka.network/ui//UI_Gacha_AvatarImg_"))
			img.src = "https://enka.network/ui//UI_Costume_HutaoCostumeWinter.png";
		else if (img.src.startsWith("https://enka.network/ui//UI_Costume_"))
			img.src = "https://enka.network/ui//UI_Costume_HutaoCostumeWinter.png";
	});
};

replace();

const observer = new MutationObserver(replace);
observer.observe(document.body, { childList: true, subtree: true });
