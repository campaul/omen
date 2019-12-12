function preview() {

    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;

    const w = document.getElementById('window');
    const doc = w.contentWindow.document;
    doc.open();
    doc.write(`<html><head><style>${css}</style></head><body>${html}</body></html>`);
    doc.close();

    w.style = 'display: block;';
    document.getElementById('close').style = 'display: block;'
};

document.getElementById('preview').addEventListener('click', () => {
    preview();
});

document.getElementById('close').addEventListener('click', (e) => {
    document.getElementById('window').style = 'display: none;';
    e.target.style = 'display: none;';
});
