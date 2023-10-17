import type { SideBarItem } from '@/@types/sidebar'
import {
  mdiViewDashboard,
  mdiChartLine,
  mdiStethoscope,
  mdiNewspaperVariantMultipleOutline,
  mdiBrightnessPercent,
  mdiCartArrowDown,
  mdiPackageVariantClosed,
  mdiAccountGroup,
  mdiReceipt,
  mdiClipboardTextClock,
  mdiApps,
  mdiGraph,
  mdiChartPie,
  mdiCart,
  mdiFinance,
  mdiDatabase,
  mdiCog,
  mdiHumanQueue,
  mdiTicket,
  mdiMedicalCottonSwab,
  mdiHistory,
  mdiChartTimelineVariant,
  mdiAccount,
  mdiClipboardTextSearch,
  mdiNoteEdit,
  mdiCardAccountDetailsStar,
  mdiFileChartOutline,
  mdiAutorenew,
  mdiTicketPercent,
  mdiShieldCheck,
  mdiAccountPlus,
  mdiCalendarClock,
  mdiFingerprint,
  mdiFileDocumentEdit,
  mdiSpeedometer,
  mdiAccountCash,
  mdiFileDocument,
  mdiOfficeBuilding,
  mdiFilePlus
} from '@mdi/js'

export default [
  {
    icon: mdiViewDashboard,
    label: 'Dashboard',
    children: [
      { icon: mdiGraph, label: 'CRM' },
      { icon: mdiChartPie, label: 'Analisis' },
      { icon: mdiCart, label: 'Penjualan' },
      { icon: mdiFinance, label: 'Executif' }
    ]
  },
  {
    icon: mdiChartLine,
    label: 'Penjualan',
    children: [
      { icon: mdiAccountGroup, label: 'Pengunjung' },
      { icon: mdiCartArrowDown, label: 'Pesanan Online' },
      { icon: mdiReceipt, label: 'Faktur' },
      {
        icon: mdiDatabase,
        label: 'Data Master',
        children: [
          { icon: '', label: 'Daftar Menu' },
          { icon: '', label: 'Tambah Menu' },
          { icon: '', label: 'Daftar Kategori' },
          { icon: '', label: 'Tambah Kategori' }
        ]
      },
      {
        icon: mdiFileChartOutline,
        label: 'Laporan',
        children: [
          { icon: '', label: 'Rincian Penjualan' },
          { icon: '', label: 'Rekap Penjualan' },
          { icon: '', label: 'Pasien' },
          { icon: '', label: 'Perkategori Menu' },
          { icon: '', label: 'Menu Terlaris' },
          { icon: '', label: 'Void Menu' },
          { icon: '', label: 'Free Menu' },
          { icon: '', label: 'Rekap Penuh' },
          { icon: '', label: 'Data Pengunjung' }
        ]
      },
      { icon: mdiCog, label: 'Pengaturan' }
    ]
  },
  {
    icon: mdiStethoscope,
    label: 'Pelayanan',
    children: [
      { icon: mdiHumanQueue, label: 'Antrian' },
      { icon: mdiStethoscope, label: 'Proses Konsultasi' },
      { icon: mdiTicket, label: 'Aktivitas Pelayanan' },
      { icon: mdiMedicalCottonSwab, label: 'Paket Pelayanan' },
      { icon: mdiHistory, label: 'Deposit' },
      { icon: mdiChartTimelineVariant, label: 'Percentase Konsultasi' },
      {
        icon: mdiFileChartOutline,
        label: 'Laporan',
        children: [
          { icon: '', label: 'Persentase' },
          { icon: '', label: 'Persentase by Kategori' },
          { icon: '', label: 'Rekap Persentase' },
          { icon: '', label: 'Resep' },
          { icon: '', label: 'Rincian Buku Tamu' },
          { icon: '', label: 'Rekap Buku Tamu' }
        ]
      },
      {
        icon: mdiCog,
        label: 'Pengaturan',
        children: [
          { icon: '', label: 'Ruangan' },
          { icon: '', label: 'Aktivitas' },
          { icon: '', label: 'Persentase' },
          { icon: '', label: 'Referensi Keluhan' },
          { icon: '', label: 'Referensi Diagnosa' }
        ]
      }
    ]
  },
  {
    icon: mdiNewspaperVariantMultipleOutline,
    label: 'Rekam Medis',
    children: [
      { icon: mdiAccount, label: 'Pasien' },
      { icon: mdiClipboardTextSearch, label: 'Hasil Analisis' },
      { icon: mdiNoteEdit, label: 'Resep Konsultasi' },
      { icon: mdiCardAccountDetailsStar, label: 'Membership' },
      {
        icon: mdiFileChartOutline,
        label: 'Laporan',
        children: [
          { icon: '', label: 'Daftar Pasien' },
          { icon: '', label: 'Registrasi' }
        ]
      },
      { icon: mdiCog, label: 'Pengaturan' }
    ]
  },
  {
    icon: mdiBrightnessPercent,
    label: 'Promo',
    children: [
      { icon: mdiAutorenew, label: 'Promo Otomatis' },
      { icon: mdiTicketPercent, label: 'Promo Voucher' },
      {
        icon: mdiFileChartOutline,
        label: 'Laporan',
        children: [
          { icon: '', label: 'Aktivitas Promo' },
          { icon: '', label: 'Pengaturan Promo' }
        ]
      },
      { icon: mdiCog, label: 'Pengaturan' }
    ]
  },
  {
    icon: mdiCartArrowDown,
    label: 'Pembelian',
    children: [
      { icon: mdiCartArrowDown, label: 'Pemesanan' },
      { icon: mdiShieldCheck, label: 'Kontrol Kualitas' },
      { icon: mdiFileChartOutline, label: 'Laporan' },
      { icon: mdiCog, label: 'Pengaturan' }
    ]
  },
  {
    icon: mdiPackageVariantClosed,
    label: 'Penyimpanan',
    children: [
      {
        icon: mdiPackageVariantClosed,
        label: 'Stok',
        children: [
          { icon: '', label: 'Stok Tersedia' },
          { icon: '', label: 'Stok Masuk' },
          { icon: '', label: 'Stok Keluar' },
          { icon: '', label: 'Stok Kedaluwarsa' },
          { icon: '', label: 'Aktivitas Stok' }
        ]
      },
      {
        icon: mdiDatabase,
        label: 'Data Master',
        children: [
          { icon: '', label: 'Data Barang' },
          { icon: '', label: 'Tambah Barang' }
        ]
      },
      { icon: mdiCog, label: 'Pengaturan' }
    ]
  },
  {
    icon: mdiAccountGroup,
    label: 'Kepegawaian',
    children: [
      { icon: mdiAccountGroup, label: 'Daftar Pegawai' },
      { icon: mdiAccountPlus, label: 'Tambah Pegawai' },
      { icon: mdiCalendarClock, label: 'Penjadwalan' },
      { icon: mdiFingerprint, label: 'Presensi' },
      { icon: mdiFileDocumentEdit, label: 'Kontrak Kerja' },
      { icon: mdiSpeedometer, label: 'Penilaian Karyawan' },
      { icon: mdiAccountCash, label: 'Proses Penggajian' },
      { icon: mdiFileChartOutline, label: 'Laporan' },
      {
        icon: mdiCog,
        label: 'Pengaturan',
        children: [
          { icon: '', label: 'Posisi' },
          { icon: '', label: 'Departemen' },
          { icon: '', label: 'Shift kerja' },
          { icon: '', label: 'Kelompok Kerja' },
          { icon: '', label: 'Komponen Penggajian' },
          { icon: '', label: 'Waktu Penilaian' },
          { icon: '', label: 'Komponen Penilaian' }
        ]
      }
    ]
  },
  {
    icon: mdiReceipt,
    label: 'Tagihan'
  },
  {
    icon: mdiClipboardTextClock,
    label: 'Reservasi'
  },
  {
    icon: mdiApps,
    label: 'Aplikasi & Bisnis',
    children: [
      { icon: mdiFileDocument, label: 'Data Perusahaan' },
      { icon: mdiOfficeBuilding, label: 'Manajemen Bisnis' },
      { icon: mdiFilePlus, label: 'Tambah Bisnis' },
      { icon: mdiReceipt, label: 'Kontrak & Tagihan' }
    ]
  }
] as SideBarItem[]
