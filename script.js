
function changeProfileImage() {
    const newImageUrl = prompt("Yeni profil fotoğrafı URL'sini girin:");
    if (newImageUrl) {
        document.getElementById('profileImg').src = newImageUrl;
    } else {
        alert("Lütfen geçerli bir URL girin.");
    }
}
document.getElementById('changeProfileBtn').addEventListener('click', changeProfileImage);
