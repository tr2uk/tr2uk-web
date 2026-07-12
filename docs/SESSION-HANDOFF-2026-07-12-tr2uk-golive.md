# TR2UK-WEB — Devir Dosyası (2026-07-12)

**Durum: GO-LIVE FİİLEN TAMAMLANDI.** `tr2uk.com` yeni Next.js sitesini servis ediyor.
Kaldığımız yer: temiz bir Pages konfigürasyonu için tek bir opsiyonel UI adımı (Stage 2b) + Vercel'den çıkış kararı.

---

## 1. Proje özeti
- **Ne:** `tr2uk.com` pazarlama/hub sitesinin yeniden yazımı. Eski = tek sayfalık statik HTML; yeni = **Next.js (App Router) + TypeScript + Tailwind v4 + Bai Jamjuree**, **statik export** (`output:'export'`), **GitHub Pages**'te yayınlanıyor.
- **Dil:** Yalnızca **Türkçe** (i18n/next-intl kaldırıldı; rotalar kökte). Arızî İngilizce = British English (ürün/marka adları).
- **Repo:** `github.com/tr2uk/tr2uk-web` (GitHub'da `tr2uk` hesabı ile authenticated: `gh`).
- **Yol:** `~/dev/tr2uk-web`
- **Ayrı proje – DOKUNULMUYOR:** `~/dev/founder` (founder.tr2uk.com, ayrı repo `tr2uk/founder`, son commit `7391751`).

## 2. Branch durumu (repo: tr2uk/tr2uk-web)
| Branch | SHA | Rol |
|---|---|---|
| `main` | `587e4e4` | **CANLI** — yeni site (next-scaffold merge'ü). Pages buradan deploy oluyor. |
| `next-scaffold` | `131a438` | **Çalışma/geliştirme branch'i** — tüm iş burada yapıldı; buradan devam edilecek. |
| `backup/old-site-20260712` | `06853cc` | **ROLLBACK** — eski tek-sayfa site (merge öncesi main'in aynısı). |

> Yerel checkout'u **next-scaffold**'da bıraktım. Geliştirmeye buradan devam; sonra tekrar main'e merge + push (workflow otomatik deploy eder).

## 3. Nerede durduk / canlı durum
- **Stage 1 (yedek + workflow):** DONE. `backup/old-site-20260712` push'landı; `.github/workflows/deploy-pages.yml` eklendi.
- **Stage 2a (merge→main + push):** DONE. `next-scaffold`→`main` merge (`587e4e4`), push'landı. Deploy workflow tetiklendi ve **başarıyla tamamlandı** (`actions/deploy-pages`), `./out` yayınlandı.
- **SONUÇ:** `curl https://tr2uk.com/` → **HTTP 200, yeni site** (`<title>TR2UK – Engineering Logic…`, H1 "Karmaşık iş problemlerini…", `/consulting` Tripod içeriği, `/_next` asset'leri). Eski site göstergeleri (0 "Seyirci Kalmayın") yok.

### AÇIK / ambiguity (Stage 2b — owner UI, opsiyonel ama önerilir)
- Pages API hâlâ **`build_type: "legacy"`, `source: main/root`** gösteriyor — AMA son fiilî deployment `github-pages` environment (Actions `deploy-pages`) ve site ondan servis ediliyor. Yani konfig belirsiz: hem legacy-source ayarı hem başarılı bir Actions deploy var.
- **Risk:** İleride bir sebeple GitHub'ın **legacy "pages build and deployment"** işi main/root'tan tekrar build ederse, kökte `index.html` olmadığı için siteyi bozabilir (main kökü = Next.js *kaynağı*).
- **Öneri (owner, tek adım):** GitHub → repo Settings → **Pages → Source = "GitHub Actions"**. Böylece bundan sonra deploy YALNIZCA `deploy-pages.yml` ile olur, legacy-build yarışı biter. Kod tarafında yapılacak bir şey yok. (Kural gereği Code bu ayarı API/CLI ile DEĞİŞTİRMEDİ.)
- **CNAME notu:** Merge, kökteki `CNAME`'i "kaldırıldı" olarak çözdü; `public/CNAME` = `tr2uk.com` (build → `out/CNAME`). Custom domain Pages ayarlarında bağlı, HTTPS onaylı.

### Rollback (gerekirse)
```
cd ~/dev/tr2uk-web && git fetch origin
git checkout -B main origin/backup/old-site-20260712
git push --force-with-lease origin main    # eski tek-sayfa siteye döner
```
(Force-push gerektirir; sadece gerçekten geri almak gerekirse. Yeni geliştirme next-scaffold'da durur.)

## 4. Vercel (ayrı bir açık konu — "Vercel'den uzaklaşalım")
- Vercel yalnızca **önizleme** için kullanıldı: proje `tr2uk-web` (`cetin-karakayas-projects`, hesap `database-3759`). Deployment Protection **KAPALI** (public). Custom domain YOK. Prod'a hiç bağlanmadı.
- Kullanıcı kararı: **GitHub Pages önizleme (Actions)** yönünde gidilecekti; kurulum HENÜZ yapılmadı (interrupt oldu).
- **Yapılacak (karar verildi, uygulanmadı):** ayrı `tr2uk/tr2uk-web-preview` reposu + Actions workflow ile `next-scaffold` push'ta `*.github.io` preview URL. Ardından **Vercel projesini teardown** (`vercel remove tr2uk-web` veya dashboard'dan sil).
- Not: Cloudflare/Netlify bu oturumda yeni OAuth istediği için kullanılamadı; GitHub-native tercih edildi.

## 5. Site yapısı ve içerik durumu (hepsi TR, final — blog hariç)
Rotalar (kökte): `/` `/consulting` `/digital-solutions` `/publishing` `/fire-safety` `/food-hygiene` `/blog` `/contact`
- **Home** (`app/page.tsx`): hero (banner.webp bg, kicker/H1/sub/strip, 2 CTA) + 5 branch kartı. FINAL.
- **Consulting**: Tripod Modeli (saf CSS 3-düğüm görsel: Türkiye – TR2UK Köprüsü – UK) + Ar-Ge&İnovasyon+Fon + Stratejik Problem Çözme; CTA→/contact. Form YOK (dead form kaldırıldı). Göçmenlik/vize İÇERMİYOR. FINAL.
- **Digital Solutions**: RMS (8 badge) + Green House case study (6 webp galeri) + Yaaze case study (6 webp galeri) + B2Verify + Taxi + cross-refs. FINAL.
- **Publishing**: The Baird Effect (kitap.webp + Amazon `amzn.eu/d/0b2gFaqI`) + UK İş Rehberi 2025 (guide.pdf indir). Sadece 2 öğe. FINAL.
- **Fire Safety**: intro/scope/for-whom + LeadForm(source="fire-safety"). "yasal yükümlülüğünüzü karşılayan" (belirli mevzuat/garanti YOK). FINAL.
- **Food Hygiene**: 2 hizmet (denetim hazırlığı EHO + Level 2 eğitim/belge, Level 3 belgeli eğitmen) + 3-yıl tazeleme notu + LeadForm(source="food-hygiene"). "accredited/Ofqual" YOK, sertifika görseli YOK. FINAL.
- **Blog**: yalnızca placeholder ("Blog" / "İçerikler yakında."). Örnek MDX post ve route SİLİNDİ. İçerik sonra.
- **Contact**: ContactForm (source="tr2uk.com") + görünür `hello@tr2uk.com`. Dead form kaldırıldı.

## 6. Formlar (Formspree)
- Endpoint: `https://formspree.io/f/mjgevzna` (tek endpoint, eski canlı siteden alındı).
- **`components/ContactForm.tsx`** — Contact sayfası; alanlar name/phone/email/message + `_gotcha` honeypot + hidden `source="tr2uk.com"`; POST JSON (Content-Type+Accept application/json); inline success/error, sending state.
- **`components/LeadForm.tsx`** — YENİDEN KULLANILABİLİR (`source` prop'u alır). Alanlar name/email/phone/business/message + `_gotcha` + hidden source. Fire Safety `source="fire-safety"`, Food Hygiene `source="food-hygiene"` kullanıyor.
- Endpoint string HTML'de değil, **JS chunk'ında** (fetch sabiti) — grep'te HTML'de görünmez, normaldir.

## 7. Konvansiyonlar (ZORUNLU)
- **en dash (–) ONLY, ASLA em dash (—).** Her teslimde `out/`'ta U+2014 = 0 kontrol edildi.
- Tokens: `--primary #0a192f`, `--accent #64ffda`. Font: **Bai Jamjuree** (next/font, 300/400/500/700, `--font-bai` → `--font-sans`).
- İş e-postası: **`hello@tr2uk.com`** (footer + contact + JSON-LD). `ck@tr2uk.com` her yerden kaldırıldı.
- Görseller: `next/image` + `unoptimized` export; kaynak `public/assets/`.
- `public/CNAME`=tr2uk.com, `public/.nojekyll` var.
- Branch disiplini (bu proje boyunca): geliştirme next-scaffold'da; teslimler branch-only push; main'e sadece bilinçli go-live merge'ünde dokunuldu.

## 8. Sıradaki adımlar (öncelik sırası)
1. **(Owner, UI)** Pages Source → "GitHub Actions" (Stage 2b) — konfig temizliği; kod yok. *En önemli açık.*
2. **Doğrulama** (2b sonrası): `deploy-pages` run yeşil + `tr2uk.com` yeni siteyi servis ediyor (şu an ediyor).
3. **Vercel'den çıkış:** GitHub Pages preview (Actions) kurulumu (`tr2uk-web-preview` repo) + Vercel projesini teardown.
4. **Blog içeriği** (ileride) — MDX config inert duruyor (`next.config.mjs` + `mdx-components.tsx`), tekrar kullanılabilir.
5. Nice-to-have: Amazon linkinin doğru kitap sayfasına gittiğini teyit; Taxi/B2Verify linkleri canlı.

## 9. Gotcha'lar
- **`pnpm build` → `./out`** (statik export). Yerelde `pnpm build` yeşil; her rota `out/<rota>/index.html`.
- Vercel'de "next export de-opts" uyarısı normaldir (statik serve eder).
- Owner geçmişte **main'e doğrudan** commit'ler attı (CNAME Create/Delete toggle'ları). main'e dokunmadan önce daima `git fetch` + `origin/main` ile senkron.
- Yerel `.gitignore`'a `.vercel` eklendi (commit'lendi). `.vercel/` = Vercel link dizini, ignore'da.
- deploy-pages.yml: `actions/checkout@v4`, `pnpm/action-setup@v4` (version 10), `setup-node@v4` (lts/*, cache pnpm), `configure-pages@v5`, `upload-pages-artifact@v3` (path `./out`), `deploy-pages@v4`; triggers push:main + workflow_dispatch; perms pages:write + id-token:write; concurrency "pages".

## 10. Hızlı komutlar
```
cd ~/dev/tr2uk-web
git checkout next-scaffold          # geliştirme branch'i
pnpm install && pnpm build          # → ./out
# yeni iş: next-scaffold'da düzenle, commit, push origin next-scaffold
# canlıya alma: git checkout -B main origin/main && git merge --no-ff next-scaffold && git push origin main
gh run list --repo tr2uk/tr2uk-web  # deploy durumları
```
