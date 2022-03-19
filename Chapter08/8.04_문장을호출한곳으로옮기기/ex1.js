function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    zztmp(outStream, person.photo);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write("<div>\n");
            zztmp(outStream, p);
            outStream.write(`<p>위치: ${photo.location}</p>\n`);
            outStream.write("</div>\n");
        });
}

function emitPhotoData(outStream, photo) {
    zztmp(outStream, photo);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function zztmp(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}