import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <SectionWrapper bg="gray" className="pt-32">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
          <p className="text-lg text-text-muted mb-12">
            Whether you need a new installation, maintenance support, or a technical consultation, our team of experts is ready to assist you.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Head Office & Works</h4>
                <p className="text-text-muted">123 Industrial Area, Phase II,<br />New Delhi, 110020, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-green-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Phone</h4>
                <p className="text-text-muted">+91 95717 25256</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Email</h4>
                <p className="text-text-muted">saraswatienterprises256@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
