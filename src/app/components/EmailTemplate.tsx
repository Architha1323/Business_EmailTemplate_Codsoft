export default function EmailTemplate() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
      {/* Wrapper */}
      <div style={{ backgroundColor: '#f5f5f5' }}>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          {/* Main Container */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            maxWidth: '600px', 
            width: '100%', 
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            
            {/* Header Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, #e8f4f8 0%, #d4e9f0 100%)', 
              padding: '50px 40px', 
              textAlign: 'center' 
            }}>
              <h1 style={{ 
                margin: '0 0 20px 0', 
                fontSize: '32px', 
                fontWeight: 600, 
                color: '#2c5f7a', 
                lineHeight: 1.3 
              }}>
                Emotional Wellness
              </h1>
              <p style={{ 
                margin: 0, 
                fontSize: '18px', 
                color: '#4a7a91', 
                lineHeight: 1.6 
              }}>
                Your journey to emotional well-being starts here
              </p>
            </div>

            {/* Hero Image Section */}
            <div style={{ padding: '0', lineHeight: 0 }}>
              <img 
                src="https://images.squarespace-cdn.com/content/v1/60efea69b246143f36c94d63/82a1f6ab-9f76-4f9e-997b-833706488342/Emotional+Wellness+Coach+Emotional+Health+%26+Therapy.jpg"
                alt="Emotional Wellness"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Introduction Section */}
            <div style={{ padding: '50px 40px', backgroundColor: '#ffffff' }}>
              <h2 style={{ 
                margin: '0 0 20px 0', 
                fontSize: '24px', 
                fontWeight: 600, 
                color: '#2c5f7a', 
                textAlign: 'center' 
              }}>
                You Deserve Support
              </h2>
              <p style={{ 
                margin: '0 0 16px 0', 
                fontSize: '16px', 
                color: '#5a6c75', 
                lineHeight: 1.8, 
                textAlign: 'center' 
              }}>
                Emotional well-being is an essential part of living a fulfilling life. Whether you're navigating stress, seeking personal growth, or working through challenging times, know that support is available.
              </p>
              <p style={{ 
                margin: 0, 
                fontSize: '16px', 
                color: '#5a6c75', 
                lineHeight: 1.8, 
                textAlign: 'center' 
              }}>
                Taking the first step can feel overwhelming, but improvement begins with small, compassionate actions toward yourself.
              </p>
            </div>

            {/* Services Section */}
            <div style={{ padding: '50px 40px', backgroundColor: '#fafbfc' }}>
              <h2 style={{ 
                margin: '0 0 30px 0', 
                fontSize: '26px', 
                fontWeight: 600, 
                color: '#2c5f7a', 
                textAlign: 'center' 
              }}>
                Our Services Include
              </h2>
              
              {/* Services Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '30px' }}>
                {/* Individual Support */}
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px', 
                  padding: '25px', 
                  textAlign: 'center', 
                  border: '1px solid #e0e8ed' 
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🤝</div>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: '#2c5f7a' 
                  }}>
                    Individual Support
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: '#5a6c75', 
                    lineHeight: 1.6 
                  }}>
                    One-on-one sessions tailored to your needs
                  </p>
                </div>

                {/* Coping Strategies */}
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px', 
                  padding: '25px', 
                  textAlign: 'center', 
                  border: '1px solid #e0e8ed' 
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🧠</div>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: '#2c5f7a' 
                  }}>
                    Coping Strategies
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: '#5a6c75', 
                    lineHeight: 1.6 
                  }}>
                    Evidence-based techniques for daily challenges
                  </p>
                </div>

                {/* Mindfulness Techniques */}
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px', 
                  padding: '25px', 
                  textAlign: 'center', 
                  border: '1px solid #e0e8ed' 
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🌿</div>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: '#2c5f7a' 
                  }}>
                    Mindfulness Techniques
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: '#5a6c75', 
                    lineHeight: 1.6 
                  }}>
                    Practices to ground and center yourself
                  </p>
                </div>

                {/* Personal Growth */}
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px', 
                  padding: '25px', 
                  textAlign: 'center', 
                  border: '1px solid #e0e8ed' 
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🌱</div>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: '#2c5f7a' 
                  }}>
                    Personal Growth
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: '#5a6c75', 
                    lineHeight: 1.6 
                  }}>
                    Guidance for meaningful life changes
                  </p>
                </div>
              </div>

              {/* Stress Management - Centered */}
              <div style={{ maxWidth: '250px', margin: '0 auto 30px' }}>
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px', 
                  padding: '25px', 
                  textAlign: 'center', 
                  border: '1px solid #e0e8ed' 
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🧘</div>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: '#2c5f7a' 
                  }}>
                    Stress Management
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: '#5a6c75', 
                    lineHeight: 1.6 
                  }}>
                    Tools to navigate overwhelming moments
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ textAlign: 'center' }}>
                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-block', 
                    backgroundColor: '#4a9db5', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    padding: '16px 40px', 
                    borderRadius: '30px', 
                    fontSize: '16px', 
                    fontWeight: 600 
                  }}
                >
                  Book a Session
                </a>
              </div>
            </div>

            {/* Trust Section */}
            <div style={{ padding: '50px 40px', backgroundColor: '#e8f4f8', textAlign: 'center' }}>
              <div style={{ 
                display: 'inline-block', 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#c8dfe8', 
                borderRadius: '50%', 
                lineHeight: '80px', 
                fontSize: '36px', 
                marginBottom: '20px' 
              }}>
                🔒
              </div>
              <h2 style={{ 
                margin: '0 0 20px 0', 
                fontSize: '24px', 
                fontWeight: 600, 
                color: '#2c5f7a' 
              }}>
                Your Trust Matters
              </h2>
              <p style={{ 
                margin: '0 0 12px 0', 
                fontSize: '16px', 
                color: '#4a7a91', 
                lineHeight: 1.7 
              }}>
                ✓ All sessions led by certified professionals
              </p>
              <p style={{ 
                margin: '0 0 12px 0', 
                fontSize: '16px', 
                color: '#4a7a91', 
                lineHeight: 1.7 
              }}>
                ✓ Completely confidential and secure
              </p>
              <p style={{ 
                margin: 0, 
                fontSize: '16px', 
                color: '#4a7a91', 
                lineHeight: 1.7 
              }}>
                ✓ Your privacy is our priority
              </p>
            </div>

            {/* Process Section */}
            <div style={{ padding: '50px 40px', backgroundColor: '#ffffff' }}>
              <h2 style={{ 
                margin: '0 0 15px 0', 
                fontSize: '26px', 
                fontWeight: 600, 
                color: '#2c5f7a', 
                textAlign: 'center' 
              }}>
                You Don't Have to Figure This Out Alone
              </h2>
              <p style={{ 
                margin: '0 0 40px 0', 
                fontSize: '16px', 
                color: '#5a6c75', 
                lineHeight: 1.7, 
                textAlign: 'center' 
              }}>
                Getting started is simple and judgment-free
              </p>
              
              {/* Process Steps */}
              <div>
                {/* Step 1 */}
                <div style={{ display: 'flex', padding: '20px 0', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#e8f4f8', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '50px', 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    color: '#4a9db5',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    1
                  </div>
                  <div>
                    <h3 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '18px', 
                      fontWeight: 600, 
                      color: '#2c5f7a' 
                    }}>
                      Choose a Session Type
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '15px', 
                      color: '#5a6c75', 
                      lineHeight: 1.6 
                    }}>
                      Browse our services and find what feels right for you—whether it's individual support, mindfulness, or stress management.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div style={{ display: 'flex', padding: '20px 0', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#e8f4f8', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '50px', 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    color: '#4a9db5',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    2
                  </div>
                  <div>
                    <h3 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '18px', 
                      fontWeight: 600, 
                      color: '#2c5f7a' 
                    }}>
                      Connect with a Professional
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '15px', 
                      color: '#5a6c75', 
                      lineHeight: 1.6 
                    }}>
                      We'll match you with a certified professional who understands your needs and can guide your journey.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div style={{ display: 'flex', padding: '20px 0', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#e8f4f8', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '50px', 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    color: '#4a9db5',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    3
                  </div>
                  <div>
                    <h3 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '18px', 
                      fontWeight: 600, 
                      color: '#2c5f7a' 
                    }}>
                      Schedule Conveniently
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '15px', 
                      color: '#5a6c75', 
                      lineHeight: 1.6 
                    }}>
                      Pick a time that works for your life—flexible scheduling means support fits your routine.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div style={{ display: 'flex', padding: '20px 0', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#e8f4f8', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '50px', 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    color: '#4a9db5',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    4
                  </div>
                  <div>
                    <h3 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '18px', 
                      fontWeight: 600, 
                      color: '#2c5f7a' 
                    }}>
                      Begin Your Journey
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '15px', 
                      color: '#5a6c75', 
                      lineHeight: 1.6 
                    }}>
                      Take the first step toward emotional wellness. Every journey begins with courage and compassion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div style={{ 
              padding: '60px 40px', 
              background: 'linear-gradient(135deg, #d4e9f0 0%, #c8dfe8 100%)', 
              textAlign: 'center' 
            }}>
              <h2 style={{ 
                margin: '0 0 15px 0', 
                fontSize: '28px', 
                fontWeight: 600, 
                color: '#2c5f7a' 
              }}>
                Guided Support for Emotional Wellness
              </h2>
              <p style={{ 
                margin: '0 0 30px 0', 
                fontSize: '16px', 
                color: '#4a7a91', 
                lineHeight: 1.7 
              }}>
                Take control of your emotional well-being today. You're not alone in this.
              </p>
              <a 
                href="#" 
                style={{ 
                  display: 'inline-block', 
                  backgroundColor: '#2c5f7a', 
                  color: '#ffffff', 
                  textDecoration: 'none', 
                  padding: '18px 45px', 
                  borderRadius: '30px', 
                  fontSize: '17px', 
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(44, 95, 122, 0.3)' 
                }}
              >
                Book an Appointment
              </a>
            </div>

            {/* Footer */}
            <div style={{ 
              padding: '40px 40px 30px', 
              backgroundColor: '#f9fafb', 
              borderTop: '1px solid #e0e8ed' 
            }}>
              {/* Social Media Icons */}
              <div style={{ marginBottom: '25px', textAlign: 'center' }}>
                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-block', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#4a9db5', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '40px', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    fontSize: '18px',
                    margin: '0 10px'
                  }}
                >
                  f
                </a>
                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-block', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#4a9db5', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '40px', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    fontSize: '18px',
                    margin: '0 10px'
                  }}
                >
                  t
                </a>
                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-block', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#4a9db5', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '40px', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    margin: '0 10px'
                  }}
                >
                  in
                </a>
                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-block', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#4a9db5', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '40px', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    fontSize: '18px',
                    margin: '0 10px'
                  }}
                >
                  @
                </a>
              </div>

              {/* Footer Text */}
              <p style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px', 
                color: '#7a8c95', 
                lineHeight: 1.6, 
                textAlign: 'center' 
              }}>
                Your Organization | Wellness Team | Support Services
              </p>
              <p style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px', 
                color: '#7a8c95', 
                lineHeight: 1.6, 
                textAlign: 'center' 
              }}>
                123 Wellness Way, Suite 100, City, State 12345
              </p>
              <p style={{ 
                margin: '0 0 20px 0', 
                fontSize: '14px', 
                color: '#7a8c95', 
                lineHeight: 1.6, 
                textAlign: 'center' 
              }}>
                Questions? Email us at <a href="mailto:support@yourorganization.com" style={{ color: '#4a9db5', textDecoration: 'none' }}>support@yourorganization.com</a>
              </p>
              
              {/* Links */}
              <div style={{ paddingBottom: '20px', textAlign: 'center' }}>
                <a href="#" style={{ color: '#4a9db5', textDecoration: 'none', fontSize: '13px', padding: '0 10px', borderRight: '1px solid #d0d9de' }}>Unsubscribe</a>
                <a href="#" style={{ color: '#4a9db5', textDecoration: 'none', fontSize: '13px', padding: '0 10px', borderRight: '1px solid #d0d9de' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#4a9db5', textDecoration: 'none', fontSize: '13px', padding: '0 10px' }}>Terms of Service</a>
              </div>

              {/* Copyright */}
              <p style={{ 
                margin: 0, 
                fontSize: '12px', 
                color: '#a0adb5', 
                textAlign: 'center' 
              }}>
                © 2026 Your Organization. All rights reserved.
              </p>
              
              {/* Disclaimer */}
              <p style={{ 
                margin: '15px 0 0 0', 
                fontSize: '11px', 
                color: '#b0bac1', 
                lineHeight: 1.5, 
                textAlign: 'center' 
              }}>
                This email contains information about wellness services. If you're experiencing a mental health emergency, please contact your local emergency services or crisis hotline immediately.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}