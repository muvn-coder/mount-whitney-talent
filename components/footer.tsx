import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer>
      {/* Yellow Contact Section */}
      <div className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get in touch with us, and let us be your starting point through this journey.
              </h2>
              <button className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                Contact Deeteam
                <span>→</span>
              </button>
            </div>

            {/* Avatar Section */}
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-gray-900 font-medium mb-2">Hi</p>
                <div className="w-24 h-24 bg-yellow-300 rounded-full mb-2 flex items-center justify-center">
                  <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/male.png" alt="Male" width={80} height={80} className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-900 font-medium mb-2">Hai</p>
                <div className="w-24 h-24 bg-yellow-300 rounded-full mb-2 flex items-center justify-center">
                  <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/female.png" alt="Female" width={80} height={80} className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-900 font-medium mb-2">你好</p>
                <div className="w-24 h-24 bg-yellow-300 rounded-full mb-2 flex items-center justify-center">
                  <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/male.png" alt="Male" width={80} height={80} className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-900 font-medium mb-2">வணக்கம்</p>
                <div className="w-24 h-24 bg-yellow-300 rounded-full mb-2 flex items-center justify-center">
                  <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/female.png" alt="Female" width={80} height={80} className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Footer Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-1">
              <h3 className="text-4xl md:text-5xl font-bold">We Build Your World</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-gray-900" />
              </div>
              <span className="text-lg">+65 6635 2335</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-gray-900" />
              </div>
              <span className="text-lg">hello@mwhitneytalent.com</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-gray-900" />
              </div>
              <span className="text-lg text-center">
                26 Sin Ming Lane, #07-128
                <br />
                Midview City, S573971
              </span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="#"
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <Linkedin size={24} className="text-gray-900" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <Facebook size={24} className="text-gray-900" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <Instagram size={24} className="text-gray-900" />
              </a>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400">© 2025 Mount Whitney Talent Ltd</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.487" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
