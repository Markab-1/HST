import { useMediaQuery } from 'react-responsive'

import Title from 'components/Title/Title';
import Section from 'components/Section/Section';
import s from './Survey.module.css';
import Undertitle from 'components/Undertitle/Undertitle';
import Subsection from 'components/Subsection/Subsection';
import Subtitle from 'components/Subtitle/Subtitle';

import frescoField from "../../figs/FRESCO_Layout_wJEMS_sm.jpg";

function Survey({children}) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })
  return ( 
    <Section>
        <Title title="Survey"/>
        <Undertitle title="The fresco dataset"/>
        <Subsection>
<p className={s.abs}>ABSTRACT</p>
<p className={s.abs}>FRESCO: The First Reionization Epoch Spectroscopically Complete Observations </p>
<p className={s.content}>
Revealing the dramatic build-up of galaxies during the first 1 billion years to the peak of star formation at z &#126; 2 &#8212; 3 
is one of Hubble's greatest achievements. Yet huge gaps in our understanding remain since our galaxy samples are incomplete
 due to the uncertainties of photometric selection. The highly-incomplete spectroscopic information at z&#62;6 means that we 
 lack physical understanding of the processes driving early galaxy assembly. To date, less than 1% of known galaxies in the 
 epoch of reionization at z &#62; 6 have confirmed redshifts, and basic quantities such as mass-to-light ratios can be uncertain by 
 factors of 5 &#8212; 10 &#8212; due to the unknown contributions of strong emission lines in the photometry used to derive stellar masses. 
 As a result, we still only have a broad, phenomenological picture of early galaxy formation and growth. FRESCO exploits 
 JWST's remarkable new spectroscopic capabilities to remedy this situation in a maximally-efficient way. By obtaining 2 
 hr deep NIRCam/grism observations with just the F444W filter, FRESCO will yield redshifts over a wide redshift range for a 
 complete sample of &#126;330 z &#126; 7 &#8212; 9 galaxies, as well as &#126;1200 z &#126; 5 &#8212; 6.5 galaxies, in the Deep CANDELS areas of the GOODS-S and 
 GOODS-N fields. FRESCO will yield an unprecedented Legacy archive, for the first time, of spectroscopic redshifts and 
 emission line measurements from [OIII]+H-beta, H-alpha, and even Pa-alpha at low redshifts. FRESCO's grism observations 
 provide the total line fluxes for estimating galaxy stellar mass and critically-needed slit-loss calibrations of NIRSpec/MSA 
 spectra. We are not requesting proprietary time to ensure that FRESCO will be a key Legacy dataset for the community. 
 </p>
 </Subsection>
 {isMobile && 
 <hr style={{width: '460px', marginLeft: 'calc(-30px)'  }}/>
 }
 {isTablet && 
 <hr style={{width: '720px', marginLeft: 'calc(-30px)'  }}/>
 }
 {isDesktop && 
 <hr style={{width: '1200px', marginLeft: 'calc(-30px)'  }}/>
 }
 <Subsection>
 <Subtitle title="Fresco survey layout:"/>
 {isMobile &&   
    <div className={s.layoutTablet}>
        <div className={s.layoutItemTablet}>       
        <img src={frescoField} alt="FRESCO field" />
        </div>
        <div className={s.layoutItemTablet}>
            FRESCO is designed to optimally cover the two CANDELS/Deep regions in the 
             GOODS-S and -N fields, which are among the most valuable extragalactic legacy 
            fields in the full sky. Since more than 40% of all known z &#126; 7  &#8212; 8 candidate galaxies 
            lie in these fields, they are the obvious choice for complete spectroscopic follow-up. 
            Additionally, the two fields show different large scale structures, with GOODS-N featuring 
            an overdensity of z &#126; 7  &#8212; 8 candidates. The FRESCO mosaics are designed to cover a total area 
            of 7 x 8.6 sq-arcmin both with grism spectroscopy and medium band imaging, which will 
            significantly add to the legacy of these fields.
        </div>
    </div>
  }
 {isTablet &&   
    <div className={s.layoutTablet}>
        <div className={s.layoutItemTablet}>       
        <img src={frescoField} alt="FRESCO field" />
        </div>
        <div className={s.layoutItemTablet}>
            FRESCO is designed to optimally cover the two CANDELS/Deep regions in the 
             GOODS-S and -N fields, which are among the most valuable extragalactic legacy 
            fields in the full sky. Since more than 40% of all known z &#126; 7  &#8212; 8 candidate galaxies 
            lie in these fields, they are the obvious choice for complete spectroscopic follow-up. 
            Additionally, the two fields show different large scale structures, with GOODS-N featuring 
            an overdensity of z &#126; 7  &#8212; 8 candidates. The FRESCO mosaics are designed to cover a total area 
            of 7 x 8.6 sq-arcmin both with grism spectroscopy and medium band imaging, which will 
            significantly add to the legacy of these fields.
        </div>
    </div>
  }
 {isDesktop &&   
    <div className={s.layout}>
        <div className={s.layoutItem}>       
        <img src={frescoField} alt="FRESCO field" />
        </div>
        <div className={s.layoutItem}>
            FRESCO is designed to optimally cover the two CANDELS/Deep regions in the 
             GOODS-S and -N fields, which are among the most valuable extragalactic legacy 
            fields in the full sky. Since more than 40% of all known z &#126; 7  &#8212; 8 candidate galaxies 
            lie in these fields, they are the obvious choice for complete spectroscopic follow-up. 
            Additionally, the two fields show different large scale structures, with GOODS-N featuring 
            an overdensity of z &#126; 7  &#8212; 8 candidates. The FRESCO mosaics are designed to cover a total area 
            of 7 x 8.6 sq-arcmin both with grism spectroscopy and medium band imaging, which will 
            significantly add to the legacy of these fields.
        </div>
    </div>
  }

    <p>More detailed information on the FRESCO survey can be found in the overview paper <a href="https://ui.adsabs.harvard.edu/abs/2023MNRAS.525.2864O/abstract" target="_blank" rel="noreferrer noopener">Oesch et al. (2023)</a>.</p>
 </Subsection>
    </Section>
  ) ;
}

export default Survey;
