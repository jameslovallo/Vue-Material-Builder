import Vue from 'vue'

// Import components from files
import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import Column from '~/components/Column.vue'
import Dialog from '~/components/Dialog.vue'
import Divider from '~/components/Divider.vue'
import Drawer from '~/components/Drawer.vue'
import ExpansionPanel from '~/components/ExpansionPanel.vue'
import ExpansionPanelContent from '~/components/ExpansionPanelContent.vue'
import Feature from '~/components/Feature.vue'
import Grid from '~/components/Grid.vue'
import Icon from '~/components/Icon.vue'
import Image from '~/components/Image.vue'
import List from '~/components/List.vue'
import ListSubheader from '~/components/ListSubheader.vue'
import ListTile from '~/components/ListTile.vue'
import Markdown from '~/components/Markdown.vue'
import MediaCard from '~/components/MediaCard.vue'
import Navigation from '~/components/Navigation.vue'
import Page from '~/components/Page.vue'
import PlainText from '~/components/PlainText.vue'
import Row from '~/components/Row.vue'
import Spacer from '~/components/Spacer.vue'

// Attach components to storyblok
Vue.component('blok-button', Button)
Vue.component('blok-card', Card)
Vue.component('blok-column', Column)
Vue.component('blok-dialog', Dialog)
Vue.component('blok-divider', Divider)
Vue.component('blok-expansionpanel', ExpansionPanel)
Vue.component('blok-expansionpanelcontent', ExpansionPanelContent)
Vue.component('blok-drawer', Drawer)
Vue.component('blok-feature', Feature)
Vue.component('blok-grid', Grid)
Vue.component('blok-icon', Icon)
Vue.component('blok-image', Image)
Vue.component('blok-list', List)
Vue.component('blok-listsubheader', ListSubheader)
Vue.component('blok-listtile', ListTile)
Vue.component('blok-markdown', Markdown)
Vue.component('blok-mediacard', MediaCard)
Vue.component('blok-navigation', Navigation)
Vue.component('blok-page', Page)
Vue.component('blok-row', Row)
Vue.component('blok-spacer', Spacer)
Vue.component('blok-text', PlainText)
