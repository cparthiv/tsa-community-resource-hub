import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Terms of Service
            </h1>
            <p className="text-foreground/70 mb-12 text-lg">
              Last updated: March 2025
            </p>

            <div className="space-y-8">
              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  1. Acceptance of Terms
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  By accessing and using the Redmond Community Resource Hub website, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  2. Use License
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) 
                  on the Redmond Community Resource Hub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  3. Disclaimer
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  The materials on the Redmond Community Resource Hub are provided "as is". The Redmond Community Resource Hub 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property 
                  or other violation of rights. Further, the Redmond Community Resource Hub does not warrant or make any representations concerning 
                  the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  4. Limitations
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  In no event shall the Redmond Community Resource Hub or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on the Redmond Community Resource Hub, 
                  even if the Redmond Community Resource Hub or an authorized representative has been notified orally or in writing 
                  of the possibility of such damage.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  5. Accuracy of Materials
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  The materials appearing on the Redmond Community Resource Hub could include technical, typographical, or photographic errors. 
                  The Redmond Community Resource Hub does not warrant that any of the materials on its website are accurate, complete, or current. 
                  The Redmond Community Resource Hub may make changes to the materials contained on its website at any time without notice. 
                  However, the Redmond Community Resource Hub does not make any commitment to update the materials.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  6. Links
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  The Redmond Community Resource Hub has not reviewed all of the sites linked to its website and 
                  is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement 
                  by the Redmond Community Resource Hub of the site. Use of any such linked website is at the user's own risk.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  7. Modifications
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  The Redmond Community Resource Hub may revise these terms of service for its website at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  8. Governing Law
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of Washington, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts that are located in that state or location.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
