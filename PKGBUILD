pkgname=noto-fonts-cjk-locale-conf
pkgver=1.0
pkgrel=1
pkgdesc="Make noto-fonts-cjk display correctly according to locale"
arch=('any')
license=('GPLv3')
depends=(
	'fontconfig'
    'noto-fonts-cjk'
)
source=('https://hak53q.github.io/100-noto-cjk-locale.conf')
sha256sums=('SKIP')

package() {
    install -Dm644 "100-noto-cjk-locale.conf" "${pkgdir}/etc/fonts/conf.d/100-noto-cjk-locale.conf"
}
