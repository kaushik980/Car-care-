import { Car, Upload } from 'lucide-react';
import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  carName: Yup.string().required('Car Name is required'),
  carModel: Yup.string().required('Car Model is required'),
  yearOfManufacturing: Yup.number()
    .min(1900, 'Invalid year')
    .max(new Date().getFullYear(), 'Year cannot be in the future')
    .required('Year is required'),
  noOfOwners: Yup.number().min(0, 'Invalid number').required('Number of owners is required'),
  kmDriven: Yup.number().min(0, 'Invalid mileage').required('Kilometers driven is required'),
  fuelType: Yup.string().required('Fuel type is required'),
  regCity: Yup.string().required('Registration city is required'),
  insuranceType: Yup.string().required('Insurance type is required'),
  roadTaxDateValidity: Yup.string().required('Road tax validity is required'),
  cngFitmentInRc: Yup.string().required('CNG fitment information is required'),
  registrationNumber: Yup.string().required('Registration number is required'),
  city: Yup.string().required('City is required'),
  toBeScrapped: Yup.string().required('Scrapping status is required'),
  registrationYear: Yup.number()
    .min(1900, 'Invalid year')
    .max(new Date().getFullYear(), 'Year cannot be in the future')
    .required('Registration year is required'),
  registrationMonth: Yup.string().required('Registration month is required'),
  rcCondition: Yup.string().required('RC condition is required'),
  rto: Yup.string().required('RTO is required'),
  rtoNocIssued: Yup.string().required('RTO NOC status is required'),
});



const initialValues = {
  carName: '',
  carModel: '',
  yearOfManufacturing: '',
  noOfOwners: '',
  kmDriven: '',
  fuelType: '',
  regCity: '',
  insuranceType: '',
  roadTaxDateValidity: '',
  cngFitmentInRc: '',
  registrationNumber: '',
  city: '',
  toBeScrapped: '',
  registrationYear: '',
  registrationMonth: '',
  rcCondition: '',
  rto: '',
  rtoNocIssued: '',
  file_urls: [],
  main_file: null,
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const rcConditions = [
  'Excellent',
  'Good',
  'Fair',
  'Poor',
  'Damaged'
];

const CarForm = () => {
  const navigate = useNavigate();

useEffect(() => {
  const login = localStorage.getItem("login");
  if (!login) {
    navigate("/login");
  }
}, [navigate]);
  const inputClasses =
    "w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-200 bg-white";
  const labelClasses = "text-sm font-medium text-purple-700 mb-1";
  const sectionClasses = "bg-white p-6 rounded-xl shadow-sm border border-purple-100 mb-6";

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'file_urls' && key !== 'main_file') {
        formData.append(key, value);
      }
    });

    if (values.file_urls) {
      Array.from(values.file_urls).forEach((file) => {
        formData.append('file_urls', file);
      });
    }

    if (values.main_file) {
      formData.append('mainfile', values.main_file);
    }

    try {
      const response = await axios.post(
        'https://car-care-backend-0wo4.onrender.com/api/files/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast.success('Form submitted successfully!');
      resetForm();
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <div className='bg-[#ddbdf8]  w-screen h-auto p-12 flex-col  justify-center items-center'> 
<h1 className='text-6xl font-serif text-center  tracking-tight m-10   text-[#1A435F]'>Fill Form To Add Cars..</h1>
         <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, isSubmitting }) => (
        <Form className="max-w-4xl mx-auto">
          {/* Basic Information */}
          <div className={sectionClasses}>
            <div className="flex items-center gap-2 mb-6">
              <Car className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-purple-800">Basic Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="carName" className={labelClasses}>
                  Car Name
                </label>
                <Field
                  id="carName"
                  name="carName"
                  type="text"
                  className={`${inputClasses} ${
                    errors.carName && touched.carName ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., Toyota Camry"
                />
                {errors.carName && touched.carName && (
                  <div className="text-red-500 text-sm mt-1">{errors.carName}</div>
                )}
              </div>

              <div>
                <label htmlFor="carModel" className={labelClasses}>
                  Car Model
                </label>
                <Field
                  id="carModel"
                  name="carModel"
                  type="text"
                  className={`${inputClasses} ${
                    errors.carModel && touched.carModel ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., XLE"
                />
                {errors.carModel && touched.carModel && (
                  <div className="text-red-500 text-sm mt-1">{errors.carModel}</div>
                )}
              </div>

              <div>
                <label htmlFor="yearOfManufacturing" className={labelClasses}>
                  Year of Manufacturing
                </label>
                <Field
                  id="yearOfManufacturing"
                  name="yearOfManufacturing"
                  type="number"
                  className={`${inputClasses} ${
                    errors.yearOfManufacturing && touched.yearOfManufacturing ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., 2020"
                />
                {errors.yearOfManufacturing && touched.yearOfManufacturing && (
                  <div className="text-red-500 text-sm mt-1">{errors.yearOfManufacturing}</div>
                )}
              </div>

              <div>
                <label htmlFor="kmDriven" className={labelClasses}>
                  Kilometers Driven
                </label>
                <Field
                  id="kmDriven"
                  name="kmDriven"
                  type="number"
                  className={`${inputClasses} ${
                    errors.kmDriven && touched.kmDriven ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., 50000"
                />
                {errors.kmDriven && touched.kmDriven && (
                  <div className="text-red-500 text-sm mt-1">{errors.kmDriven}</div>
                )}
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className={sectionClasses}>
            <h2 className="text-xl font-semibold text-purple-800 mb-6">Vehicle Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fuelType" className={labelClasses}>
                  Fuel Type
                </label>
                <Field
                  as="select"
                  id="fuelType"
                  name="fuelType"
                  className={`${inputClasses} ${
                    errors.fuelType && touched.fuelType ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </Field>
                {errors.fuelType && touched.fuelType && (
                  <div className="text-red-500 text-sm mt-1">{errors.fuelType}</div>
                )}
              </div>

              <div>
                <label htmlFor="noOfOwners" className={labelClasses}>
                  Number of Previous Owners
                </label>
                <Field
                  id="noOfOwners"
                  name="noOfOwners"
                  type="number"
                  className={`${inputClasses} ${
                    errors.noOfOwners && touched.noOfOwners ? 'border-red-500' : ''
                  }`}
                  min="0"
                />
                {errors.noOfOwners && touched.noOfOwners && (
                  <div className="text-red-500 text-sm mt-1">{errors.noOfOwners}</div>
                )}
              </div>

              <div>
                <label htmlFor="insuranceType" className={labelClasses}>
                  Insurance Type
                </label>
                <Field
                  as="select"
                  id="insuranceType"
                  name="insuranceType"
                  className={`${inputClasses} ${
                    errors.insuranceType && touched.insuranceType ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select Insurance Type</option>
                  <option value="Insurance Valid">Insurance Valid</option>
                  <option value="Insyrance Expired">Insurance Expired</option>
                 
                </Field>
                {errors.insuranceType && touched.insuranceType && (
                  <div className="text-red-500 text-sm mt-1">{errors.insuranceType}</div>
                )}
              </div>

              <div>
                <label htmlFor="roadTaxDateValidity" className={labelClasses}>
                  Road Tax Validity Date
                </label>
                <Field
                  id="roadTaxDateValidity"
                  name="roadTaxDateValidity"
                  type="date"
                  className={`${inputClasses} ${
                    errors.roadTaxDateValidity && touched.roadTaxDateValidity ? 'border-red-500' : ''
                  }`}
                />
                {errors.roadTaxDateValidity && touched.roadTaxDateValidity && (
                  <div className="text-red-500 text-sm mt-1">{errors.roadTaxDateValidity}</div>
                )}
              </div>

              <div>
                <label htmlFor="cngFitmentInRc" className={labelClasses}>
                  CNG Fitment in RC
                </label>
                <Field
                  as="select"
                  id="cngFitmentInRc"
                  name="cngFitmentInRc"
                  className={`${inputClasses} ${
                    errors.cngFitmentInRc && touched.cngFitmentInRc ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select CNG Fitment Status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                {errors.cngFitmentInRc && touched.cngFitmentInRc && (
                  <div className="text-red-500 text-sm mt-1">{errors.cngFitmentInRc}</div>
                )}
              </div>

              <div>
                <label htmlFor="toBeScrapped" className={labelClasses}>
                  To Be Scrapped
                </label>
                <Field
                  as="select"
                  id="toBeScrapped"
                  name="toBeScrapped"
                  className={`${inputClasses} ${
                    errors.toBeScrapped && touched.toBeScrapped ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                {errors.toBeScrapped && touched.toBeScrapped && (
                  <div className="text-red-500 text-sm mt-1">{errors.toBeScrapped}</div>
                )}
              </div>
            </div>
          </div>

          {/* Registration Details */}
          <div className={sectionClasses}>
            <h2 className="text-xl font-semibold text-purple-800 mb-6">Registration Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="registrationNumber" className={labelClasses}>
                  Registration Number
                </label>
                <Field
                  id="registrationNumber"
                  name="registrationNumber"
                  type="text"
                  className={`${inputClasses} ${
                    errors.registrationNumber && touched.registrationNumber ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., KA01AB1234"
                />
                {errors.registrationNumber && touched.registrationNumber && (
                  <div className="text-red-500 text-sm mt-1">{errors.registrationNumber}</div>
                )}
              </div>

              <div>
                <label htmlFor="registrationYear" className={labelClasses}>
                  Registration Year
                </label>
                <Field
                  id="registrationYear"
                  name="registrationYear"
                  type="number"
                  className={`${inputClasses} ${
                    errors.registrationYear && touched.registrationYear ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., 2020"
                />
                {errors.registrationYear && touched.registrationYear && (
                  <div className="text-red-500 text-sm mt-1">{errors.registrationYear}</div>
                )}
              </div>

              <div>
                <label htmlFor="registrationMonth" className={labelClasses}>
                  Registration Month
                </label>
                <Field
                  as="select"
                  id="registrationMonth"
                  name="registrationMonth"
                  className={`${inputClasses} ${
                    errors.registrationMonth && touched.registrationMonth ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </Field>
                {errors.registrationMonth && touched.registrationMonth && (
                  <div className="text-red-500 text-sm mt-1">{errors.registrationMonth}</div>
                )}
              </div>

              <div>
                <label htmlFor="rcCondition" className={labelClasses}>
                  RC Condition
                </label>
                <Field
                  as="select"
                  id="rcCondition"
                  name="rcCondition"
                  className={`${inputClasses} ${
                    errors.rcCondition && touched.rcCondition ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select RC Condition</option>
                  {rcConditions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </Field>
                {errors.rcCondition && touched.rcCondition && (
                  <div className="text-red-500 text-sm mt-1">{errors.rcCondition}</div>
                )}
              </div>

              <div>
                <label htmlFor="rto" className={labelClasses}>
                  RTO
                </label>
                <Field
                  id="rto"
                  name="rto"
                  type="text"
                  className={`${inputClasses} ${
                    errors.rto && touched.rto ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., KA-01"
                />
                {errors.rto && touched.rto && (
                  <div className="text-red-500 text-sm mt-1">{errors.rto}</div>
                )}
              </div>

              <div>
                <label htmlFor="rtoNocIssued" className={labelClasses}>
                  RTO NOC Issued
                </label>
                <Field
                  as="select"
                  id="rtoNocIssued"
                  name="rtoNocIssued"
                  className={`${inputClasses} ${
                    errors.rtoNocIssued && touched.rtoNocIssued ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                {errors.rtoNocIssued && touched.rtoNocIssued && (
                  <div className="text-red-500 text-sm mt-1">{errors.rtoNocIssued}</div>
                )}
              </div>

              <div>
                <label htmlFor="city" className={labelClasses}>
                  Current City
                </label>
                <Field
                  id="city"
                  name="city"
                  type="text"
                  className={`${inputClasses} ${
                    errors.city && touched.city ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., Bangalore"
                />
                {errors.city && touched.city && (
                  <div className="text-red-500 text-sm mt-1">{errors.city}</div>
                )}
              </div>

              <div>
                <label htmlFor="regCity" className={labelClasses}>
                  Registration City
                </label>
                <Field
                  id="regCity"
                  name="regCity"
                  type="text"
                  className={`${inputClasses} ${
                    errors.regCity && touched.regCity ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., Bangalore"
                />
                {errors.regCity && touched.regCity && (
                  <div className="text-red-500 text-sm mt-1">{errors.regCity}</div>
                )}
              </div>
            </div>
          </div>

          {/* Documents Upload */}
          <div className={sectionClasses}>
            <div className="flex items-center gap-2 mb-6">
              <Upload className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-purple-800">Upload Documents</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className={labelClasses}>Car Images (Multiple)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-purple-200 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-purple-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0l3.328 3.328" />
                    </svg>
                    <p className="text-sm text-purple-600">
                    Click to select files
                    </p>
                    <input
                      type="file"
                      onChange={(event) => {
                        setFieldValue('file_urls', event.currentTarget.files);
                      }}
                      multiple
                      className="block w-full text-sm text-purple-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-purple-50 file:text-purple-700
                        hover:file:bg-purple-100"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Main File</label>
                <input
                  type="file"
                  onChange={(event) => {
                    setFieldValue('main_file', event.currentTarget.files[0]);
                  }}
                  className="block w-full text-sm text-purple-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-purple-50 file:text-purple-700
                    hover:file:bg-purple-100"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
    <ToastContainer/>
    </div>

    </>
  );
};

export default CarForm;