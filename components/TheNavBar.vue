<template>
  <div>
    <!-- Top Bar -->
    <div class="topbar">
      <div class="topbar-right">
        <form class="search-input">
          <input type="text" placeholder="Tìm kiếm" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <NuxtLink href="/login" class="login">Đăng nhập</NuxtLink>
        <NuxtLink href="#" class="lang"><span>VN</span></NuxtLink>
        <NuxtLink href="#" class="lang"><span>EN</span></NuxtLink>
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
            <li><a href="/">Trang chủ</a></li>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dropdowns = ref({
  diemden: false,
  camnang: false,
  trienlam: false
})

const toggleDropdown = (name) => {
  Object.keys(dropdowns.value).forEach(key => {
    dropdowns.value[key] = key === name ? !dropdowns.value[key] : false
  })
}

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
</style>
