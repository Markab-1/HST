import s from './Content.module.css';

import DDschema from '../../figs/DD_schema.jpg';

const Intro = () => {
    return(
        <div>
        The ISM is key to the chemical evolution of the Milky Way. Until recently, the metallicity of the neutral ISM could not be measured and was assumed
        to be perfectly mixed due to Galactic rotation. Today, the chemical properties of the ISM are hotly debated. We propose to complement our HST
        program with UVES measurements of Ti, crucial for studying the abundance and metal patterns in the warm neutral medium for individual gas
        components. Our goals are to accurately determine levels of dust depletion and metallicities to investigate: 1) the cloud-to-cloud variations of
        metallicity in the neutral ISM, which is essential for understanding metal mixing; 2) the unknown metallicity gradient of the neutral ISM; 3) the
        possibility of local α-element enhancements in individual gas components, e.g on the Local Bubble. Finally, the UVES data will enable us to study 4)
        the properties of the cold atomic and molecular gas and 5) the metallicities of OB stars, allowing a comparison with the ISM.
        </div>
    )
}

const SciRationale = () => {
    return(
        <div>The interstellar medium (ISM) is a fundamental component in galaxies, profoundly connected to the chemical
        evolution of galaxies because it transports more pristine gas accreted from the halo (Fox & Davé 2017) and metal-
        enriched gas expelled by stellar winds and SNe. The stellar and ISM chemical properties are key to understanding
        the chemical evolution of the Milky Way (MW). The metallicity gradient observed in H ii regions (Arellano-Códova
        et al. 2020) indicates an inside-out formation of the MW (Matteucci 2021). The relative abundances of α-elements
        (such as O, S, Si, Mg, Ti) with respect to Fe provide insights into the star-formation history of the MW, because
        core-collapse Supernovae produce most α-elements, while Type Ia SNe primarily produce most Fe-group elements
        on longer timescales (Tinsley 1979, McWilliam 1997, Kobayashi et al. 2020). <br/>
        The (relative) abundances of metals can be measured in detail in the MW ISM, thanks to UV/optical absorption-line
        spectroscopy of bright stars (Savage & Sembach 1996). However, the presence of cosmic dust can dramatically alter
        the observed gas-phase abundances, because metals can instead be incorporated into dust grains - a phenomenon
        called dust depletion (Field 1974, Jenkins 2009, De Cia et al. 2016). The refractory elements, those with high
        condensation T, are particularly affected by dust depletion (Savage & Mathis 1979). For example, in the MW 90
        to 99% of Fe is missing from the gas and is instead incorporated into dust. Ti is special because it is the most
        strongly depleted element1 , with up to 99.9% of it being in dust (Jenkins 2009, Konstantopoulou et al. 2022).
        Thus, Ti is the only accessible α-element that is highly depleted. Also the ionization potential of Ti ii is close to
        H i and O i, which helps avoid ionization effects.<br/>
        Recently, an HST Large Programme proposed by our team was accepted for UV observations with HST/STIS
        in Cycle 32, as detailed in the ”Background and Expertise” section. The high-resolution spectra will enable a
        component-by-component analysis of the relative abundances of metals. The main goals of our HST programme
        are to: 1) Measure the cloud-to-cloud variations of metallicity in the neutral ISM (warm neutral medium) along
        20 lines of sight. The metallicity dispersion has an impact on phenomena related to gas mixing in galaxies, yet
        it is vastly unknown, and currently debated (Ritchey et al. 2023; see also De Cia et al. 2021); 2) Measure the
        metallicity gradient in the neutral ISM by observing 39 targets (from Gaia-DR3) at &gt; 9 kpc from the Galactic
        Center, an uncharted territory. In addition, we will also study the stellar metallicities and compare them with the
        gas metallicities, as well as the cold neutral medium from neutral and molecular species.
        The limitation of our UV HST programme is that it does not cover suitable Ti II lines , because the sufficiently
        strong lines are in the optical (bluest) regime (unlike other metals that mostly absorb in UV) and are detectable
        down to low metallicities. Having Ti in the study of the abundance and metal pattern is key for being able to solidly
        pinpoint the level of dust depletion and metallicity. Ti is the most depleted element, and thus it has the stronger
        leverage in the linear fit to the metal abundances. Fig.1 (left) shows the observed abundances vs the refractory
        index (the tendency to deplete) for the case on no dust (a), with dust (b), with α-element enhancement (c), and an
        ISM mix of clouds with different metallicity and depletion (d). The linear fit determines the dust depletion (slope)
        and the total dust-corrected metallicity (normalization). The ISM is often complex, with clouds along the lines of
        sight that may have different chemical properties (e.g. Welty at al. 2020). This can produce deviations from the
        linear abundance patterns (Fig.1d), observed in ∼50% of cases. Because of its high depletion, Ti has a special
        role in enabling the separation of the abundance patterns into individual gas components with different metallicity
        and dust depletion (open circles in Fig.1d). The study of the abundance patterns over refractory indexes down to
        Ti will increase our sensitivity to deviations from the linear behaviour, making us more sensitive to low-metallicity
        gas. This will allow us to measure more accurately both the metallicity gradient and the cloud-to-cloud metallicity
        variations. In addition, only when Ti is available there is enough data to separate α and non-α elements (Fig.1c),
        which can be done on the full line of sight (with H, as in Fig.1c), and also on individual gas components (without
        H). This makes it possible to investigate any potential α-element enhancements in the ISM, for example as observed
        in the Magellanic Clouds (e.g. De Cia et al. 2024) and intermediate-z galaxies (e.g. Cullen et al. 2021, Velichko
        et al. 2024). For the MW, α-element enhancements (which have been observed in metal-poor stars) have not
        been observed so far in the ISM, but they could be locally confined in gas components (washed away by typical
        full line-of-sight analyses), e.g associated with recent star formation on the Local Bubble (Zucker et al. 2022). <br/>
        We propose to complement our HST programme with UVES measurements of Ti to study the abundance patterns
        (with H, see Fig.1) and metal patterns (equivalent to Fig.1, but without H, and for the individual gas components).
        This will enable us to more solidly determine the levels of dust depletion and metallicities and thus study 1) the
        cloud-to-cloud variations of metallicity in the neutral ISM, key to understand metal mixing and 2) the unknown
        metallicity gradient of the neutral ISM in the MW. Moreover, the addition of Ti will allow us to 3) investigate the
        intriguing possibility of local α-element enhancements in individual gas components, e.g. on the Local Bubble.
        </div>
    )
}

const ImmObj = () => {
    return(
    <div>
        <div className={s.div} >Our first immediate objective (Run 1) is to detect the Ti ii λ 3242, 3384, and 3230 lines in the highest resolution
        UVES spectra of 33 bright MW OB-type stars. For this we will use the Blue Arm at the bluest setting (346 nm)
        and narrowest slit (0.4”, R ∼ 70, 000). We aim at studying the individual components of the line profiles and
        characterise well their column densities. To compensate for any differences in resolution we will use the highest
        resolution spectra to determine the absorption-line profile decomposition and apply it to the lower-resolution data.<br/>
        We also aim at covering the full spectrum by adding one UVES setting (Run2). This will further enable the detection
        of a wide variety of atomic and molecular lines (in the cold neutral medium) that are useful for both abundance and
        depletion studies, as well as characterizing the physical conditions of the gas. The combination of the 346+580
        and 437+760 settings will cover the Fe i λ3720 line, the Ca ii H & K lines, Na i D lines, K i λ 7664, 7698 lines,
        many diffuse interstellar bands, and molecular lines (OH, CH, CH+ , CN, C2 , C3 ), among others. Last, but not
        least, covering the full spectrum, specially between 3800 and 9000Å, is key to characterise the spectral features
        that are necessary, together with the UV, for the determination of the OB stellar metallicities (e.g. Simon-Diaz
        2020). We aim at measuring and comparing the metallicities of the 33 OB stars and the ISM toward them.
        Beyond these immediate objectives, the proposed observations, combining high-resolution UV and optical spectra,
        will build a dataset of great legacy for the study of both the ISM (in different phases) and massive stars. <br/>
        <b>Sample.</b> The homogeneous sample of our HST Programme (56 stars with spectral type ≤ B2) was built to
        incorporate suitable archival and new HST/STIS data spectra. 20 targets are observed with the highest STIS
        spectral resolution (R∼114000) to study individual components of the line profiles and investigate the variations in
        metallicity of the neutral ISM (Scientific Goal 1, SG1 in Fig.1 right). 36 Gaia-DR3 targets at Galactocentric distance
        &gt; 9 kpc (beyond the grey shaded region in Fig.1) are observed with STIS medium-high resolution (R∼45000)
        to investigate the metallicity gradient in the neutral ISM (Scientific Goal 2, SG2 in Fig.1 right). The stars in our
        sample rotate with 40 &lt; vsini &lt; 200 km/s, maximizing our ability to disentangle the narrow ISM absorption lines
        from the broad stellar features and to still measure stellar metallicities. The 33 UVES targets (Fig.1 right), are
        selected from the 56 targets of our HST Programme to be visible from Paranal. We plan to observe the remaining
        23 northern targets will Keck/HIRES. We can reach the scope of this proposal regardless of the northern targets.
        </div>
        <div className={s.img}>
        <img src={DDschema} alt="Dust deplition" />
        </div>
        <div>
            <b>Fig.</b> <b>Left:</b> Different factors shaping the observed abundance patterns. The refractory index represents the
        tendency to deplete onto dust grains. The linear fit determines the level of dust depletion (slope of the curve) and
        the total dust-corrected metallicity (normalization). <b>a)</b> With no dust, the abundances line up with the metallicity.
        <b>b)</b> With dust, the refractory elements have lower abundances because they are depleted. <b>c)</b> Deviations from the
        linear behaviour due to core-collapse SNe α-element enhancement. <b>d)</b> Case of two gas components along the
        line of sight, each contributing 50%, one with low metallicity and no dust (blue open circles) and the other with
        high-metallicity and dust (orange). The total (black) abundances of the refractory metals are dominated by the
        low-metallicity gas. <b>Right:</b> Galactic location of our UVES targets, as well as all our HST-program high-resolution
        (SG1) and outer disk (SG2) targets. Targets of our HST pilot project (Authors et al. submitted) are shown in
        yellow. Targets from the large HST archival compilation (moslty mid-resolution) of Ritchey et al. 2023 are in gray.
        </div>
    </div>
    )
}


export {Intro, SciRationale, ImmObj};