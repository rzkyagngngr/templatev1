import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function FormWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { title: 'Personal', fields: ['firstName', 'lastName', 'email', 'phone'] },
    { title: 'Address', fields: ['street', 'city', 'state', 'zipCode'] },
    { title: 'Payment', fields: ['cardNumber', 'expiryDate', 'cvv'] },
    { title: 'Confirm' },
  ];

  const validate = (stepIndex) => {
    const stepFields = steps[stepIndex].fields || [];
    const newErrors = {};
    let isValid = true;

    stepFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    if (stepIndex === 0) {
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
        isValid = false;
      }
      if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Phone must be 10 digits';
        isValid = false;
      }
    }

    if (stepIndex === 2) {
      if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Card number must be 16 digits';
        isValid = false;
      }
      if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'CVV must be 3-4 digits';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate(activeStep)) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
      setErrors({});
    }
  };

  const handlePrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const renderPersonal = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="John"
            className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Doe"
            className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(555) 123-4567"
          className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
    </div>
  );

  const renderAddress = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Street Address</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          placeholder="123 Main Street"
          className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="San Francisco"
            className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="CA"
            maxLength="2"
            className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
          placeholder="94102"
          className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
          className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            maxLength="5"
            className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            maxLength="4"
            className="w-full bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
        </div>
      </div>
    </div>
  );

  const renderConfirm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl border border-white/30 p-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Personal Information</h3>
          <div className="space-y-2 text-sm text-slate-700">
            <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl border border-white/30 p-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Address Information</h3>
          <div className="space-y-2 text-sm text-slate-700">
            <p>{formData.street}</p>
            <p>{formData.city}, {formData.state} {formData.zipCode}</p>
          </div>
        </div>
      </div>
      <div className="bg-white/30 backdrop-blur-xl rounded-2xl border border-white/30 p-4">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Payment Information</h3>
        <div className="space-y-2 text-sm text-slate-700">
          <p><span className="font-medium">Card:</span> ****{formData.cardNumber.slice(-4)}</p>
          <p><span className="font-medium">Expires:</span> {formData.expiryDate}</p>
        </div>
      </div>
      <div className="bg-green-100/50 backdrop-blur-xl rounded-2xl border border-green-300/30 p-4">
        <p className="text-sm text-green-700 flex items-center gap-2">
          <Check size={16} />
          Ready to submit your information
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-slate-900 tracking-wide">Form Wizard</h4>
          <div className="text-sm text-slate-600 mt-2">
            <span>Dashboard</span>
            <span className="mx-2">/</span>
            <span>Forms</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Wizard</span>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      index === activeStep
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg'
                        : index < activeStep
                        ? 'bg-green-500 text-white'
                        : 'bg-white/40 text-slate-600 border border-white/60'
                    }`}
                  >
                    {index < activeStep ? <Check size={20} /> : index + 1}
                  </div>
                  <p className="text-xs font-medium text-slate-700 mt-2 text-center">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 rounded-full transition-all ${
                      index < activeStep ? 'bg-green-500' : 'bg-white/30'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-8 mb-8">
          {activeStep === 0 && renderPersonal()}
          {activeStep === 1 && renderAddress()}
          {activeStep === 2 && renderPayment()}
          {activeStep === 3 && renderConfirm()}
        </div>

        {/* Navigation */}
        <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6">
          <div className="flex justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/40 hover:bg-white/60 disabled:bg-white/20 disabled:text-slate-400 text-slate-700 font-medium transition-all disabled:cursor-not-allowed border border-white/50"
            >
              <ChevronLeft size={18} /> Previous
            </button>
            <div className="text-sm font-medium text-slate-600">
              Step {activeStep + 1} of {steps.length}
            </div>
            <button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 disabled:from-indigo-400 disabled:to-purple-400 text-white font-medium transition-all disabled:cursor-not-allowed"
            >
              {activeStep === steps.length - 1 ? 'Complete' : 'Next'} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
