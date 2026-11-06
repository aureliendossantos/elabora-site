#!/bin/bash
# Checks https://elabora.studio once deployed. Usage: scripts/verify-live.sh [origin]
O=${1:-https://elabora.studio}
ok() { echo "OK   $1"; }
ko() { echo "FAIL $1"; FAIL=1; }
loc() { curl -s -o /dev/null -D - -H "Accept-Language: $1" "$O$2" ; }
for t in "fr-FR,fr;q=0.9,en;q=0.8|/fr/" "en-US,en;q=0.9|/en/" "de-DE,de;q=0.9|/en/" "|/en/"; do
  al=${t%%|*}; want=${t##*|}
  out=$(loc "$al" /)
  echo "$out" | head -1 | grep -q 302 && echo "$out" | grep -qi "^location: $want" && ok "/ [$al] → 302 $want" || { ko "/ [$al] → expected 302 $want"; echo "$out" | head -5; }
done
echo "$(loc fr /)" | grep -qi '^vary: accept-language' && ok "Vary: Accept-Language" || ko "Vary"
echo "$(loc fr /)" | grep -qi '^x-robots-tag: noindex' && ok "noindex on the redirect" || ko "noindex on the redirect"
for p in /confidentialite /conditions; do
  curl -s -o /dev/null -D - -H "Accept-Language: fr" "$O$p" | grep -qi '^location: /fr/' && ok "$p → /fr/…" || ko "$p"
done
www=$(curl -s -o /dev/null -D - "https://www.elabora.studio/fr/conditions/?x=1")
echo "$www" | head -1 | grep -q 301 && echo "$www" | grep -qi '^location: https://elabora.studio/fr/conditions/?x=1' && ok "www → 301 apex (path and query kept)" || { ko "www"; echo "$www" | head -5; }
for p in /fr/ /en/ /fr/mentions-legales/ /en/terms/ /fr/signalement/ /en/privacy/ /.well-known/security.txt /robots.txt /favicon.svg; do
  h=$(curl -s -o /dev/null -D - "$O$p")
  echo "$h" | head -1 | grep -q 200 && ok "$p 200" || ko "$p not 200"
  for hdr in strict-transport-security x-content-type-options referrer-policy content-security-policy x-robots-tag; do
    echo "$h" | grep -qi "^$hdr:" || ko "$p lacks $hdr"
  done
done
curl -s -D - -o /dev/null "$O/.well-known/security.txt" | grep -i '^content-type'
a=$(curl -s -o /dev/null -D - "$O$(curl -s "$O/fr/" | grep -o '/_astro/[^"]*\.css' | head -1)"); echo "$a" | grep -i '^cache-control'
curl -s "$O/fr/" | grep -o '<meta name="robots"[^>]*>'
for img in $(curl -s "$O/en/" | grep -o 'https://vitrine.elabora.page/[^"]*share.png'); do
  c=$(curl -s -o /dev/null -w '%{http_code} %{content_type}' "$img"); echo "$c $img"
done
curl -s -o /dev/null -w '404 page: %{http_code}\n' "$O/nope/"
echo "${FAIL:+SOME CHECKS FAILED}"
