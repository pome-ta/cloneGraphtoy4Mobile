import sys
import pathlib

import ui
from editor import present_themed
#import pdbg

sys.path.append(str(pathlib.Path.cwd()) + '/pythonista-webview')
from wkwebview import WKWebView

uri = pathlib.Path('./public/index.html')


class View(ui.View):
  def __init__(self, *args, **kwargs):
    ui.View.__init__(self, *args, **kwargs)
    self.wv = WKWebView()
    self.wv.load_url(str(uri))
    self.wv.flex = 'WH'
    self.refresh_webview()

    self.add_subview(self.wv)
    self.setup_close_btn()

  def layout(self):
    _x, _y, _w, _h = self.frame
    _, _, btn_w, btn_h = self.close_btn.frame
    self.close_btn.x = (_w * .92) - (btn_w / 2)
    self.close_btn.y = (_h * .064) - (btn_h / 2)

  def refresh_webview(self):
    self.wv.clear_cache()
    #self.wv.reload()

  def setup_close_btn(self):
    self.close_btn = self.create_btn('iob:ios7_close_32')
    self.close_btn.action = (lambda sender: self.close())
    self.add_subview(self.close_btn)

  def create_btn(self, icon):
    btn_icon = ui.Image.named(icon)
    return ui.Button(image=btn_icon)


if __name__ == '__main__':
  view = View()
  present_themed(
    view,
    theme_name='Theme09_Editorial',
    style='fullscreen',
    hide_title_bar=True,
    orientations=['portrait'])

