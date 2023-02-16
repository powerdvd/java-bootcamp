export class f {
	static warna_font(style) {
		let warna_font;
		if (style == 'warning' || style == 'light') { warna_font = '#5a5c69'; } else { warna_font = '#FFFFFF'; }

		return warna_font;
	}
	static bku(teks) {
		if (teks !== undefined) { return true; } else { return false; }
	}
	static tampil(teks = '') { document.write(teks); }

	static br(jml_baris = 1) {
		let baris = '';
		for (let i = 1; i <= jml_baris; i++) { baris += '<br />'; }
		f.tampil(baris);

	}
	static dpt(pro = {}) {
		let id = '';
		let isi = '';
		let tb = 1;

		if (f.bku(pro.id)) { id = pro.id; }
		//if (f.bku(pro.isi)){isi = pro.isi;}
		if (f.bku(pro.tb)) { tb = pro.tb; }

		return document.getElementById(id).value
	}
	static psg(pro = {}) {
		let id = '';
		let isi = '';
		let tb = 1;
		let elemen;

		if (f.bku(pro.id)) { id = pro.id; }
		if (f.bku(pro.isi)) { isi = pro.isi; }
		if (f.bku(pro.tb)) { tb = pro.tb; }

		elemen = f.elemen(id);
		if (tb) { elemen.value = isi; } else { elemen.innerHTML = isi; }
	}

	static elemen(id) { return document.getElementById(id); }
	static bdn() {
		let elemen = document.getElementsByTagName('body')[0].style;
		elemen.margin = '0';
		elemen.fontFamily = 'Arial';
	}
	static url(url) { window.location = url; }
}