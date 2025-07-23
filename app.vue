<template>
  <div class="container">
    <!-- Top Bar -->
    <div class="topbar">
      <div class="topbar-right">
        <form class="search-input">
          <input type="text" placeholder="Tìm kiếm" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <a href="#" class="login">Đăng nhập</a>
        <a href="#" class="lang"><span>VN</span></a>
        <a href="#" class="lang"><span>EN</span></a>
      </div>
    </div>
    <!-- Header & Menu -->
    <header class="header">
      <div class="logo-menu">
        <div class="logo">
          <img src="https://tayho360.vn/upload/admin/files/logo-header.png" alt="Logo" />
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li class="dropdown">
              <a href="#" @click.prevent="toggleDropdown('diemden')">Điểm đến <span>▼</span></a>
              <ul class="dropdown-menu" :class="{ show: dropdowns.diemden }">
                <li><a href="#">Di tích văn hóa lịch sử</a></li>
                <li><a href="#">Danh lam</a></li>
                <li><a href="#">Lễ hội</a></li>
                <li><a href="#">Làng nghề</a></li>
                <li><a href="#">Cơ quan hành chính</a></li>
                <li><a href="#">Trung tâm hội nghị sự kiện</a></li>
                <li><a href="#">Khách sạn</a></li>
                <li><a href="#">Nhà hàng quán ăn</a></li>
                <li><a href="#">Dịch vụ hỗ trợ du lịch</a></li>
              </ul>
            </li>
            <li><a href="#">Sự kiện</a></li>
            <li class="dropdown">
              <a href="#" @click.prevent="toggleDropdown('camnang')">Cẩm nang du lịch <span>▼</span></a>
              <ul class="dropdown-menu" :class="{ show: dropdowns.camnang }">
                <li><a href="#">Ở đâu?</a></li>
                <li><a href="#">Ăn gì?</a></li>
                <li><a href="#">Chơi gì?</a></li>
                <li><a href="#">Địa điểm nổi bật</a></li>
              </ul>
            </li>
            <li><a href="#">Việt Nam 360</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Tour du lịch</a></li>
            <li><a href="#">Bản đồ</a></li>
            <li class="dropdown">
              <a href="#" @click.prevent="toggleDropdown('trienlam')">Triển lãm <span>▼</span></a>
              <ul class="dropdown-menu" :class="{ show: dropdowns.trienlam }">
                <li><a href="#">Di sản Hán Nôm Tây Hồ</a></li>
                <li><a href="#">Bác Hồ với Tây Hồ</a></li>
                <li><a href="#">Tinh hoa làng nghề truyền thống</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Main Content -->
    <main class="main-content">
      <section class="banner">
        <h2>CHÀO MỪNG BẠN ĐẾN TÂY HỒ 360</h2>
        <div class="article-space"></div>
      </section>
      <section class="guide">
        <h3>Cẩm nang du lịch</h3>
        <div class="guide-list">
          <div class="guide-item">Ăn gì?</div>
          <div class="guide-item">Chơi gì?</div>
          <div class="guide-item">Ở đâu?</div>
          <div class="guide-item">Địa điểm nổi bật</div>
        </div>
      </section>
      <section class="news">
        <h3>Tin tức nổi bật</h3>
        <div class="news-list">
          <div class="news-item">[ CHUYỂN ĐỔI SỐ ] Hướng dẫn chi tiết cách tra cứu hồ sơ dịch vụ công</div>
          <div class="news-item">[ CHUYỂN ĐỔI SỐ ] Các cách chuẩn hóa thông tin thuê bao Viettel</div>
          <div class="news-item">[ CHUYỂN ĐỔI SỐ ] Hướng dẫn đặt lịch đăng kiểm trực tuyến</div>
          <div class="news-item">[ CHUYỂN ĐỔI SỐ ] Cách đăng ký làm giấy khai sinh online</div>
        </div>
      </section>
      <section class="tour">
        <h3>Tour du lịch</h3>
        <div class="tour-list">
          <div class="tour-item">Tour Đêm Tây Hồ</div>
          <div class="tour-item">Trải nghiệm Hồ Tây</div>
          <div class="tour-item">Một ngày du ngoạn Tây Hồ</div>
        </div>
      </section>
      <section class="map">
        <h3>Bản đồ 360</h3>
        <div class="map-box">[Bản đồ sẽ hiển thị ở đây]</div>
      </section>
      <section class="vn360">
        <h3>Việt Nam 360</h3>
        <div class="vn360-desc">Khám phá những điểm đến tuyệt vời ở Việt Nam</div>
      </section>
    </main>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-cols">
        <div>
          <img src="https://tayho360.vn/upload/admin/files/logo-header.png" alt="Logo" style="width:60px;">
        </div>
        <div>
          <h4>TRANG THÔNG TIN ĐIỆN TỬ TÂY HỒ 360</h4>
          <ul>
            <li>Cơ quan chủ quản: UBND phường Tây Hồ – TP. Hà Nội</li>
            <li>Địa chỉ: 657 Đ. Lạc Long Quân, Tây Hồ, Hà Nội</li>
            <li>Điện thoại: 024 7533396</li>
            <li>Email: tayho360@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4>Thông tin chung</h4>
          <ul>
            <li><a href="#">Sự kiện</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
      </div>
      <p class="copyright">Copyright Tay Ho 360 © 2025</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dropdowns = ref({
  diemden: false,
  camnang: false,
  trienlam: false
})

function toggleDropdown(name) {
  for (const key in dropdowns.value) {
    dropdowns.value[key] = false
  }
  dropdowns.value[name] = true
}

// Đóng dropdown khi click ra ngoài
function handleClickOutside(e) {
  const nav = document.querySelector('.main-nav')
  if (nav && !nav.contains(e.target)) {
    dropdowns.value.diemden = false
    dropdowns.value.camnang = false
    dropdowns.value.trienlam = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
body {
  background: #e9ecef;
}
.container {
  min-height: 100vh;
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
}
.topbar {
  background: #1a237e;
  color: #fff;
  padding: 8px 32px;
  display: flex;
  justify-content: flex-end;
}
.topbar-right {
  display: flex;
  align-items: center;
  gap: 18px;
}
.search-input {
  display: flex;
  align-items: center;
  gap: 6px;
}
.search-input input {
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
}
.search-input button {
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}
.login, .lang {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 10px;
}
.header {
  background: linear-gradient(90deg, #878edb 60%, #263179 100%);
  color: #fff;
  padding: 18px 32px 10px 32px;
}
.logo-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}
.logo img {
  width: 55px;
  height: auto;
}
.main-nav>ul {
  display: flex;
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.main-nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 8px 14px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.main-nav a:hover {
  color: #fff;
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  display: none;
  position: absolute;
  list-style: none;
  top: 110%;
  left: 0;
  min-width: 200px;
  background: #fff;
  color: #1a237e;
  box-shadow: 0 4px 16px rgba(60, 60, 120, 0.12);
  z-index: 10;
  border-radius: 8px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.2s, transform 0.2s;
  padding-left: 0;
  width: max-content;
}
.dropdown-menu.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
.dropdown-menu li {
  padding: 5px 5px;
  transition: background 0.2s;
}
.dropdown-menu li:hover {
  background: #d89f55;
}
.dropdown-menu a {
  color: #1a237e;
  text-decoration: none;
  font-weight: 500;
}
.main-content {
  padding: 32px;
}
.banner {
  background: #f5f7fa;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 24px;
}
.guide, .news, .tour, .map, .vn360 {
  margin-bottom: 32px;
}
.guide-list, .news-list, .tour-list {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}
.guide-item, .news-item, .tour-item {
  background: #e3e6fd;
  padding: 16px 24px;
  border-radius: 8px;
  color: #1a237e;
  font-weight: 500;
  min-width: 120px;
}
.map-box {
  background: #f5f7fa;
  height: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3949ab;
  font-size: 1.2rem;
}
.vn360-desc {
  background: #e3e6fd;
  padding: 16px;
  border-radius: 8px;
  color: #1a237e;
  font-weight: 500;
}
.footer {
  background: linear-gradient(90deg, #1a237e 60%, #3949ab 100%);
  color: #fff;
  text-align: left;
  padding: 36px 32px 18px 32px;
  margin-top: 36px;
}
.footer-cols {
  display: flex;
  gap: 48px;
  margin-bottom: 18px;
}
.footer-cols > div {
  flex: 1;
}
.footer-cols h4 {
  margin-top: 0;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ff9800;
}
.footer-cols ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-cols li {
  margin-bottom: 6px;
  color: #e0e0e0;
}
.footer-cols a {
  color: #fff;
  text-decoration: underline;
}
.copyright {
  text-align: center;
  margin-top: 12px;
  font-size: 15px;
  color: #fff;
  opacity: 0.8;
}
</style>