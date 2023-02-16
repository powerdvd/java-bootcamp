import { f } from './f.js';
class admin {

	//import { f } from './f.js';
	static gaya = 'dark';

	//static function line(){echo "<hr class=\"sidebar-divider\">";}
	static garis() { f.tampil("<hr class='sidebar-divider'>"); }

	static function begin_navigation() {
		//if(isset($data["style"])){$style = $data["style"];}else{$style = "primary";}
		$style = self:: style;
				//$style = substr($style,0,3) . "gradient-" . substr($style,3,strlen($style));
				echo "<ul class=\"navbar-nav bg-gradient-$style sidebar sidebar-dark accordion\" id=\"accordionSidebar\">";
	}
	static function end_navigation() {echo "</ul>"; }
	static nav(pro={}){
		f.tampil
	}
}