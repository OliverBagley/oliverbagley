<script lang="ts">
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<svelte:head>
    <title>Privacy Policy — Oliver Bagley</title>
    <meta name="description" content="Privacy policy for oliverbagley.com">
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
			alt="Mountain landscape" 
			class="w-full h-full object-cover"
		/>
		<!-- Dark overlay for text readability -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
	</div>
	
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-4xl">
			<!-- Breadcrumb -->
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<span>Privacy Policy</span>
			</p>
			<h1 class="text-5xl lg:text-7xl heading-serif mb-4 text-white">Privacy Policy</h1>
			<p class="text-gray-300">Last updated: February 11, 2026</p>
		</div>
	</div>
</section>

<!-- Content -->
<div class="pb-20 bg-cream">
    <div class="legal-content">

        <p>This Privacy Policy describes how Oliver Bagley ("I", "me", or "my") collects, uses, and shares your personal information when you visit oliverbagley.com (the "Site").</p>

        <h2>Information I Collect</h2>
        
        <h3>Information You Provide</h3>
        <p>When you contact me through the Site, I may collect the following information:</p>
        <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company name (if applicable)</li>
            <li>Any other information you choose to provide in your message</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>When you visit the Site, I automatically collect certain information about your device, including:</p>
        <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Date and time of visits</li>
        </ul>

        <p>This information is collected through cookies and similar tracking technologies. You can control cookies through your browser settings.</p>

        <h2>How I Use Your Information</h2>
        <p>I use the information I collect to:</p>
        <ul>
            <li>Respond to your inquiries and provide requested information</li>
            <li>Improve and optimize the Site</li>
            <li>Understand how visitors use the Site</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
        </ul>

        <h2>How I Share Your Information</h2>
        <p>I do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
        <ul>
            <li><strong>Service Providers:</strong> I may share information with third-party service providers who assist in operating the Site or conducting my business (e.g., hosting providers, analytics services)</li>
            <li><strong>Legal Requirements:</strong> I may disclose information if required by law or in response to legal process</li>
            <li><strong>Business Transfers:</strong> If I am involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
        </ul>

        <h2>Analytics</h2>
        <p>I use Google Analytics to collect and analyze information about how visitors use the Site. Google Analytics uses cookies to collect standard internet log information and visitor behavior information in an anonymous form. You can learn more about how Google uses data at <a href="https://policies.google.com/technologies/partner-sites" class="underline" style="color: var(--terracotta);">google.com/policies/privacy/partners</a>.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
            <li><strong>Access:</strong> The right to request access to your personal information</li>
            <li><strong>Correction:</strong> The right to request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> The right to request deletion of your information</li>
            <li><strong>Objection:</strong> The right to object to processing of your information</li>
            <li><strong>Portability:</strong> The right to request transfer of your information</li>
        </ul>
        <p>To exercise these rights, please contact me at <EmailLink>hello@...</EmailLink>.</p>

        <h2>Data Security</h2>
        <p>I implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and I cannot guarantee absolute security.</p>

        <h2>Third-Party Links</h2>
        <p>The Site may contain links to third-party websites. I am not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.</p>

        <h2>Children's Privacy</h2>
        <p>The Site is not intended for children under 13 years of age. I do not knowingly collect personal information from children under 13.</p>

        <h2>International Data Transfers</h2>
        <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>I may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. I encourage you to review this Privacy Policy periodically for any changes.</p>
    </div>
</div>
