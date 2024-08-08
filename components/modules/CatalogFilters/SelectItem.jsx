import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { catalogActions } from '@/features/catalogOptions/catalogOptionsSlice'
import { useLang } from "@/hooks/useLang";
import { getCheckedArrayParam, getSearchParamsUrl } from '@/lib/utils/common'
import { allowedSizes } from '@/constants/product'

export const SelectItem = ({ key, setOption, mobileClassName, item, isActive }) => {
  const { lang } = useLang()
  const dispatch = useDispatch()
  const sizesOptions = useSelector((state) => state.catalog.sizesOptions)
  const sizes = useSelector((state) => state.catalog.sizes)

  const applySizes = useCallback((sizes) => {
    dispatch(catalogActions.setSizes(sizes))
  }, [dispatch])

  const handleSelectSize = (id) => {
    const updatedOptions = sizesOptions.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )

    dispatch(catalogActions.setSizesOptions(updatedOptions))

    const currentOption = updatedOptions.find((item) => item.id === id)

    if (currentOption && currentOption.checked) {
      applySizes([...sizes, currentOption.size])
      return
    }

    applySizes(sizes.filter((size) => size !== currentOption?.size))
  }

  useEffect(() => {
    const urlParams = getSearchParamsUrl()
    const sizesParam = urlParams.get('sizes')

    if (sizesParam) {
      const validSizes = getCheckedArrayParam(sizesParam)

      if (validSizes && validSizes.every((size) => allowedSizes.includes(size.toLowerCase()))) {
        applySizes(validSizes)
        validSizes.forEach((size) => dispatch(catalogActions.updateSizesOptionBySize(size)))
      }

      return
    }

    dispatch(catalogActions.setSizes([]))
    dispatch(catalogActions.setSizesOptions(sizesOptions.map((option) => ({ ...option, checked: false }))))
  }, [lang, applySizes, dispatch, sizesOptions])

  return { handleSelectSize, sizesOptions, sizes }
}
