import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-pb-blue to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Call Woodstock Home?</h2>
          <p className="text-xl text-blue-100">Contact us today to schedule a tour or learn more about availability</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-white text-pb-blue rounded-full p-3 mr-4">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-blue-100">(561) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white text-pb-blue rounded-full p-3 mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-blue-100">info@pbpfl.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white text-pb-blue rounded-full p-3 mr-4">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-blue-100">
                  Woodstock Community<br />
                  Palm Beach Lakes, FL
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white text-pb-blue rounded-full p-3 mr-4">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Office Hours</h4>
                <p className="text-blue-100">
                  Mon-Fri: 9AM-6PM<br />
                  Sat: 10AM-4PM
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-2xl font-bold text-pb-gray mb-6">Request Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-pb-gray mb-1">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pb-gray mb-1">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pb-gray mb-1">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pb-gray mb-1">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your housing needs..."
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pb-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
