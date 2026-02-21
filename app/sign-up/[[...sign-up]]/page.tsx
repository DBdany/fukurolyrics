import { SignUp } from '@clerk/nextjs'
import { SiteLayout } from '@/components/retro/site-layout'

export default function SignUpPage() {
  return (
    <SiteLayout>
      <div className="flex items-center justify-center min-h-[60vh] p-4">
        <SignUp />
      </div>
    </SiteLayout>
  )
}
