<?php
    class FormatsController extends AppController {
	public function index() {
		$this->set('formats', $this->Format->xmlSource("https://cn.dataone.org/cn/v1/formats"));
    }
}
?>