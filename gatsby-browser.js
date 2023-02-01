import * as React from "react";
import {LocationProvider} from "./src/context/LocationContext";
import {LocaleProvider} from "./src/context/LocaleContext";
import {IntlProvider} from "react-intl";
import {LanguageSelector} from "./src/components/LanguageSelector";
import {messages} from "./i18n/messages";

export const wrapPageElement = ({element, props}) => {
	const {location} = props;
	const {locale} = element.props.pageContext;

	return (
		<LocationProvider location={location}>
			<LocaleProvider locale={locale}>
				<IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
					<LanguageSelector />
					{element}
				</IntlProvider>
			</LocaleProvider>
		</LocationProvider>
	);
};
