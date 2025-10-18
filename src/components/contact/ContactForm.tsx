import { Send, CheckCircle, XCircle } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import FormContainer from "./forms/FormContainer";
import FormField from "./forms/FormField";
import FormInput from "./forms/FormInput";
import FormTextArea from "./forms/FormTextArea";
import FormButton from "./forms/FormButton";
import FormSelect from "./forms/FormSelect";

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, error, success } =
    useContactForm();

  const countryCodes = [
    { value: "+1", label: "+1 (US/Canada)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+33", label: "+33 (France)" },
    { value: "+49", label: "+49 (Germany)" },
    { value: "+39", label: "+39 (Italy)" },
    { value: "+34", label: "+34 (Spain)" },
    { value: "+31", label: "+31 (Netherlands)" },
    { value: "+46", label: "+46 (Sweden)" },
    { value: "+47", label: "+47 (Norway)" },
    { value: "+45", label: "+45 (Denmark)" },
    { value: "+41", label: "+41 (Switzerland)" },
    { value: "+43", label: "+43 (Austria)" },
    { value: "+32", label: "+32 (Belgium)" },
    { value: "+351", label: "+351 (Portugal)" },
    { value: "+30", label: "+30 (Greece)" },
    { value: "+48", label: "+48 (Poland)" },
    { value: "+420", label: "+420 (Czech Republic)" },
    { value: "+36", label: "+36 (Hungary)" },
    { value: "+40", label: "+40 (Romania)" },
    { value: "+359", label: "+359 (Bulgaria)" },
    { value: "+385", label: "+385 (Croatia)" },
    { value: "+386", label: "+386 (Slovenia)" },
    { value: "+421", label: "+421 (Slovakia)" },
    { value: "+370", label: "+370 (Lithuania)" },
    { value: "+371", label: "+371 (Latvia)" },
    { value: "+372", label: "+372 (Estonia)" },
    { value: "+81", label: "+81 (Japan)" },
    { value: "+82", label: "+82 (South Korea)" },
    { value: "+86", label: "+86 (China)" },
    { value: "+91", label: "+91 (India)" },
    { value: "+61", label: "+61 (Australia)" },
    { value: "+64", label: "+64 (New Zealand)" },
    { value: "+55", label: "+55 (Brazil)" },
    { value: "+52", label: "+52 (Mexico)" },
    { value: "+54", label: "+54 (Argentina)" },
    { value: "+56", label: "+56 (Chile)" },
    { value: "+57", label: "+57 (Colombia)" },
    { value: "+51", label: "+51 (Peru)" },
    { value: "+58", label: "+58 (Venezuela)" },
    { value: "+27", label: "+27 (South Africa)" },
    { value: "+20", label: "+20 (Egypt)" },
    { value: "+234", label: "+234 (Nigeria)" },
    { value: "+254", label: "+254 (Kenya)" },
    { value: "+233", label: "+233 (Ghana)" },
    { value: "+212", label: "+212 (Morocco)" },
    { value: "+213", label: "+213 (Algeria)" },
    { value: "+216", label: "+216 (Tunisia)" },
    { value: "+218", label: "+218 (Libya)" },
    { value: "+220", label: "+220 (Gambia)" },
    { value: "+221", label: "+221 (Senegal)" },
    { value: "+222", label: "+222 (Mauritania)" },
    { value: "+223", label: "+223 (Mali)" },
    { value: "+224", label: "+224 (Guinea)" },
    { value: "+225", label: "+225 (Ivory Coast)" },
    { value: "+226", label: "+226 (Burkina Faso)" },
    { value: "+227", label: "+227 (Niger)" },
    { value: "+228", label: "+228 (Togo)" },
    { value: "+229", label: "+229 (Benin)" },
    { value: "+230", label: "+230 (Mauritius)" },
    { value: "+231", label: "+231 (Liberia)" },
    { value: "+232", label: "+232 (Sierra Leone)" },
    { value: "+235", label: "+235 (Chad)" },
    { value: "+236", label: "+236 (Central African Republic)" },
    { value: "+237", label: "+237 (Cameroon)" },
    { value: "+238", label: "+238 (Cape Verde)" },
    { value: "+239", label: "+239 (São Tomé and Príncipe)" },
    { value: "+240", label: "+240 (Equatorial Guinea)" },
    { value: "+241", label: "+241 (Gabon)" },
    { value: "+242", label: "+242 (Republic of the Congo)" },
    { value: "+243", label: "+243 (Democratic Republic of the Congo)" },
    { value: "+244", label: "+244 (Angola)" },
    { value: "+245", label: "+245 (Guinea-Bissau)" },
    { value: "+246", label: "+246 (British Indian Ocean Territory)" },
    { value: "+248", label: "+248 (Seychelles)" },
    { value: "+249", label: "+249 (Sudan)" },
    { value: "+250", label: "+250 (Rwanda)" },
    { value: "+251", label: "+251 (Ethiopia)" },
    { value: "+252", label: "+252 (Somalia)" },
    { value: "+253", label: "+253 (Djibouti)" },
    { value: "+255", label: "+255 (Tanzania)" },
    { value: "+256", label: "+256 (Uganda)" },
    { value: "+257", label: "+257 (Burundi)" },
    { value: "+258", label: "+258 (Mozambique)" },
    { value: "+260", label: "+260 (Zambia)" },
    { value: "+261", label: "+261 (Madagascar)" },
    { value: "+262", label: "+262 (Réunion)" },
    { value: "+263", label: "+263 (Zimbabwe)" },
    { value: "+264", label: "+264 (Namibia)" },
    { value: "+265", label: "+265 (Malawi)" },
    { value: "+266", label: "+266 (Lesotho)" },
    { value: "+267", label: "+267 (Botswana)" },
    { value: "+268", label: "+268 (Swaziland)" },
    { value: "+269", label: "+269 (Comoros)" },
    { value: "+290", label: "+290 (Saint Helena)" },
    { value: "+291", label: "+291 (Eritrea)" },
    { value: "+297", label: "+297 (Aruba)" },
    { value: "+298", label: "+298 (Faroe Islands)" },
    { value: "+299", label: "+299 (Greenland)" },
    { value: "+350", label: "+350 (Gibraltar)" },
    { value: "+352", label: "+352 (Luxembourg)" },
    { value: "+353", label: "+353 (Ireland)" },
    { value: "+354", label: "+354 (Iceland)" },
    { value: "+355", label: "+355 (Albania)" },
    { value: "+356", label: "+356 (Malta)" },
    { value: "+357", label: "+357 (Cyprus)" },
    { value: "+358", label: "+358 (Finland)" },
    { value: "+7", label: "+7 (Russia/Kazakhstan)" },
    { value: "+90", label: "+90 (Turkey)" },
    { value: "+92", label: "+92 (Pakistan)" },
    { value: "+93", label: "+93 (Afghanistan)" },
    { value: "+94", label: "+94 (Sri Lanka)" },
    { value: "+95", label: "+95 (Myanmar)" },
    { value: "+960", label: "+960 (Maldives)" },
    { value: "+961", label: "+961 (Lebanon)" },
    { value: "+962", label: "+962 (Jordan)" },
    { value: "+963", label: "+963 (Syria)" },
    { value: "+964", label: "+964 (Iraq)" },
    { value: "+965", label: "+965 (Kuwait)" },
    { value: "+966", label: "+966 (Saudi Arabia)" },
    { value: "+967", label: "+967 (Yemen)" },
    { value: "+968", label: "+968 (Oman)" },
    { value: "+970", label: "+970 (Palestine)" },
    { value: "+971", label: "+971 (UAE)" },
    { value: "+972", label: "+972 (Israel)" },
    { value: "+973", label: "+973 (Bahrain)" },
    { value: "+974", label: "+974 (Qatar)" },
    { value: "+975", label: "+975 (Bhutan)" },
    { value: "+976", label: "+976 (Mongolia)" },
    { value: "+977", label: "+977 (Nepal)" },
    { value: "+992", label: "+992 (Tajikistan)" },
    { value: "+993", label: "+993 (Turkmenistan)" },
    { value: "+994", label: "+994 (Azerbaijan)" },
    { value: "+995", label: "+995 (Georgia)" },
    { value: "+996", label: "+996 (Kyrgyzstan)" },
    { value: "+998", label: "+998 (Uzbekistan)" },
  ];

  return (
    <FormContainer title="General Inquiry">
      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center text-green-700">
          <CheckCircle className="mr-2 flex-shrink-0" />
          <p>
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center text-red-700">
          <XCircle className="mr-2 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField label="Name">
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Email">
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Phone Number">
          <div className="flex gap-3">
            <div className="w-32">
              <FormSelect
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                options={countryCodes}
              />
            </div>
            <div className="flex-1">
              <FormInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>
          </div>
        </FormField>

        <FormField label="Subject">
          <FormInput
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Message">
          <FormTextArea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>

        <div className="pt-5">
          <FormButton
            type="submit"
            icon={Send}
            isLoading={isSubmitting}
            loadingText="Sending..."
          >
            Send Message
          </FormButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
