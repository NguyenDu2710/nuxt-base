<template>
  <Hero :products="products"/>
  <main class="bg-gradient-to-br from-sky-200 to-slate-300 via-slate-200 ">
    <TechUsed />
    <FeaturedProducts :products="products"/>
    <ServicesSolutions />
    <HrCapability />
    <Partners />
    <!-- <CaseStudiesContact /> -->
    <!-- <CTA /> -->
  </main>
</template>
<script setup lang="ts">
import Hero from '@/components/Dashboard/Hero.vue'
import TechUsed from '@/components/Dashboard/TechUsed.vue'
import FeaturedProducts from '@/components/Dashboard/FeaturedProducts.vue'
import Partners from '@/components/Dashboard/Partners.vue'
import CaseStudiesContact from '@/components/Dashboard/CaseStudiesContact.vue'
import CTA from '@/components/Dashboard/CTA.vue'
import HrCapability from '@/components/Dashboard/HrCapability.vue'
import ServicesSolutions from '@/components/Dashboard/ServicesSolutions.vue'

export interface Product {
  id: string
  title: string
  tag: string
  subtitle: string
  bullets: string[]
  img?: string
}

const products: Product[] = [
  { id: 'vision360', title: '360 Tour', tag: 'Web', subtitle: 'Tham quan thực tế ảo bằng các hình ảnh 360 độ', bullets: ['360° Image', 'VR tour', 'Interoperability'], img: "/images/products/web360.png" },
  { id: 'analytics', title: 'Augmented Reality (AR)', tag: 'Web', subtitle: 'Công nghệ kết hợp thế giới thực và thông tin ảo', bullets: ['Vật thể 3D', 'Xoay vật thể 360°', 'Tương tác trong không gian ảo'], img: "/images/products/ar.png" },
  { id: 'analytics', title: 'Legal Chatbot', tag: 'Web', subtitle: 'Chatbot hỗ trợ nghiệp vụ pháp lý', bullets: ['Ai Xử lý ngôn ngữ tự nhiên', 'Cung cấp chính sách pháp lý, pháp luật mới nhất', 'Gợi ý trình bày bố cục tài liệu pháp lý'], img: "/images/products/bot.png" },
  { id: 'analytics', title: 'Hệ thống quản lý trường học', tag: 'Web', subtitle: 'Quản lý học sinh, trang thiết bị,...', bullets: ['Thống kê số lượng', 'Tạo báo cáo, biểu mẫu', 'Sắp xếp lớp học, giáo viên,...'], img: "/images/products/school.png" },
  { id: 'datastream', title: 'Hệ thống Y học gia đình', tag: 'Web', subtitle: 'Hỗ trợ bảo vệ sức khỏe gia đình', bullets: ['Tra cứu, chuẩn đoán bệnh', 'Tìm bệnh viện, bác sĩ', 'Tra cứu danh mục thuốc'], img: "/images/products/hospital.png" },
  { id: 'datastream', title: 'Hệ thống kế toán', tag: 'Web', subtitle: 'Dịch vụ hành chính', bullets: ['Thống kê, tính toán', 'Xuất báo cáo, tổng hợp', 'Quản lý chi tiêu,...'], img: "/images/products/accounting.png" },
  { id: 'datastream', title: 'Hệ thống quản lý tài sản', tag: 'Web', subtitle: 'Quản lý tài sản', bullets: ['Quản lý danh sách, số lượng tài sản', 'Quản lý việc phân chia, cấp phát tài sản', 'Xuất báo cáo, tổng hợp'], img: "/images/products/qlts.png" },
  { id: 'datastream', title: 'Hệ thống quản lý công việc', tag: 'Web', subtitle: 'Quản lý, phân chia công việc', bullets: ['Quản lý nhân sự và phân chia công việc', 'Giám sát trạng thái công việc', 'Trao đổi với nhân sự realtime,...'], img: "/images/products/qlcv.png" },
  { id: 'datastream', title: 'Hệ thống quản lý/phân phối hàng hóa', tag: 'Web', subtitle: 'Quản lý kho hàng, phân phối hàng hóa', bullets: ['Thống kê giá trị, số lượng hàng hóa', 'Giám sát trạng thái và vị trí hàng hóa', 'Xuất báo cáo, tổng hợp định kỳ'], img: "/images/products/erp.png" },
  { id: 'datastream', title: 'Hệ thống kiểm kê tài sản (toàn quốc)', tag: 'Web', subtitle: 'Kiểm kê tài sản công cả nước', bullets: ['Kiểm kê số lượng và giá trị tài sản', 'Quản lý báo cáo từ các đơn vị', 'Tổng hợp và tính toán số lượng tài sản'], img: "/images/products/kkts.png" },
  { id: 'datastream', title: 'Hệ thống nhúng và sử dụng AI', tag: 'AI/EMBEDDED', subtitle: 'Real-time Data Pipeline', bullets: ['Giám sát thời gian thực', 'SỬ dụng AI để nhận dạng', 'Hỗ trợ nhúng trên nhiều loại thiết bị'], img: "/images/products/embeded.png" },
  { id: 'datastream', title: 'Hệ thống về Cyber Security', tag: 'Security', subtitle: 'Bảo mật', bullets: ['Quét lỗ hổng bảo mật', 'Giám sát lưu lượng truy cập', 'Hỗ trợ và ngăn chặn tấn công mạng'], img: "/images/products/security.png" },
  { id: 'datastream', title: 'MÔ HÌNH ĐẠI HỌC SỐ', tag: 'Research', subtitle: 'Hệ thống hỗ trợ giảng dạy Đại học', bullets: ['Hỗ trợ giảng dạy bằng các bài học, bài thi trực tuyến', 'Sắp xếp lớp, thời khóa biếu', 'Hỗ trợ các nghiệp vụ sư phạm,...'], img: "/images/products/study.png" },
]
</script>