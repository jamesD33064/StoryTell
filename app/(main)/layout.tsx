import Navbar from '@/components/Navbar/navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
    
    {children}
    <Navbar />
    </div>
  )
}
