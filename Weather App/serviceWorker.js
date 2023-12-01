const staticWeather = "weather-app"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/main .css",
  "/js/app.js",
  "/images/360_F_461232389_XCYvca9n9P437nm3FrCsEIapG4SrhufP.jpg",
  "/images/celsius.png",
  "/images/cloudy (1).png",
  "/images/cloudy.png",
  "/images/hail.png",
  "/images/How-to-Build-an-API-Driven-Weather-App.webp",
  "/images/humidity.png",
  "/images/light-rain.png",
  "/images/logo.png",
  "/images/rainysun.png",
  "/images/snowflake.png",
  "/images/stars.png",
  "/images/sun.png",
  "/images/visibility.png",
  "/images/weather.png",
  "/images/wind.png",
  "/assets/icons/icon-72x72.png",
  "/assets/icons/icon-96x96.png",
  "/assets/icons/icon-128x128.png",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/icon-152x152.png",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-384x384.png",
  "/assets/icons/icon-512x512.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticWeather).then(cache => {
        cache.addAll(assets)
      })
    )
  })