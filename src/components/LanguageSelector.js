import * as React from "react";
import {useContext} from "react";
import {useLocalization} from "gatsby-theme-i18n";
import {Link} from "gatsby";
import {LocationContext} from "../context/LocationContext";
import {LocaleContext} from "../context/LocaleContext";

export const LanguageSelector = () => {
	const {config} = useLocalization();
	const locale = useContext(LocaleContext);
	const {pathname} = useContext(LocationContext);
	const removeLocalePath = /(\/e(s|n)|)(\/*|)/;
	const pathnameWithoutLocale = pathname.replace(removeLocalePath, "");
	return (
		<div>
			{config.map(({code, localName}) => {
				return (
					code !== locale && (
						<Link key={code} to={`/${code}/${pathnameWithoutLocale}`}>
							{localName}
						</Link>
					)
				);
			})}
		</div>
	);
};
