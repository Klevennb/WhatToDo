import { handleError } from '@/Services'
import { defaultList } from '../../Assets/defaultList'

export const getList = (wheelType, listNumber=0) => {
    if (wheelType === 'default') {
        return defaultList
    }
}

export const getAllLists = (wheelType, listNumber = 0) => {

}

export const saveSuggestionList = (suggestList) => {
    // TODO: Save list to phone
}
